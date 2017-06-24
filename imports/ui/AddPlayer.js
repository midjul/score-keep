import React from 'react';
import {Players} from '../api/players';



export default class AddPlayer extends React.Component{
constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
}

handleSubmit(e){
let playerName=e.target.playerName.value;
     e.preventDefault();
    
    if (playerName) {
   
    e.target.playerName.value='';
 
   Players.insert({
    name:playerName,
    score:0
   });
  }
}

  render(){ 
      return (<div>
  <form onSubmit={this.handleSubmit} >
            <input type="text" name="playerName"
                   placeholder="Player name" />
           <button>Add Player</button>
         </form>
         </div>);
  }
}