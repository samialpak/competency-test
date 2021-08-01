import React from "react";
import Logout from './Logout';

export default class Success extends React.Component {

   constructor(props){
      super(props);

      this.state = {
        userName: this.props.history.location.state.name
      }
   }

   render() {
    return (
      <div>

        <Logout thisClass={this}/>

        <br />
        <header className="App-header">
          Application Complete
        </header>
        <br />
        {this.state.userName} Thank you for applying to this useful government service.
      </div>
    );
   }
}
