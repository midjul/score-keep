import React from 'react';
import {Players} from '../api/players';
import PropTypes from 'prop-types';

export default class ShowPlayer extends React.Component{
    render(){
        const player=this.props.player;
        return (
          <div key={player._id} className="item">
          <div className="player">
           <div>
           <h3 className="player__name">{player.name}</h3> 
           <p className="player__stats">{player.score}
              point(s) </p>
             
            </div>

            <div className="player__actions">
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
            
              </div>

            </div>
            </div>);
        
    }
}

ShowPlayer.propTypes={
    player:PropTypes.object.isRequired
}