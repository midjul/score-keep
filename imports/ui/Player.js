import React from 'react';
import {Players} from '../api/players';
import PropTypes from 'prop-types';

export default class ShowPlayer extends React.Component{
    render(){
        const player=this.props.player;
        return ( <div key={player._id} className="item">
        <p>{player.name} has {player.score}
              point(s) </p>
            <button className="button button--round" onClick={()=>{
                Players.update({_id:player._id},
                {$inc:{score:1}})
            }}>+1</button>
            <button className="button button--round" onClick={()=>{
                Players.update({_id:player._id},{
                    $inc:{score:-1}
                }); 
            }}>-1</button>
              <button className="button button--round" onClick={()=>Players.remove({_id:player._id })}>X</button>
            </div>);
        
    }
}

ShowPlayer.propTypes={
    player:PropTypes.object.isRequired
}