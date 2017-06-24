import React from 'react';
import {Players} from '../api/players';
import PropTypes from 'prop-types';

export default class ShowPlayer extends React.Component{
    render(){
        const player=this.props.player;
        return ( <p key={player._id}>{player.name} has {player.score}
              point(s)
            <button onClick={()=>{
                Players.update({_id:player._id},
                {$inc:{score:1}})
            }}>+1</button>
            <button onClick={()=>{
                Players.update({_id:player._id},{
                    $inc:{score:-1}
                }); 
            }}>-1</button>
              <button onClick={()=>Players.remove({_id:player._id })}>X</button>
            </p>);
        
    }
}

ShowPlayer.propTypes={
    player:PropTypes.object.isRequired
}