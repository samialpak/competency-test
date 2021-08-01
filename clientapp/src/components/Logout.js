import React from 'react';
import { GoogleLogout } from 'react-google-login';

import { setCookie, getCookie, eraseCookie } from '../utils/cookie';

const clientId =
  '443012302229-gn78fie39jmot2e6sog718glqcl60ihs.apps.googleusercontent.com';

export default class Logout extends React.Component {

   constructor(props){
      super(props);

      this.state = {
        thisClass: this.props.thisClass
      };
   }

   onSuccess() {
     console.log('Logout made successfully');
     alert('Logout made successfully ✌');

     eraseCookie('id_token');

     this.state.thisClass.props.history.push("/");
     window.location.reload();
   };

   render() {
    return (
      <div>
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={this.onSuccess.bind(this)}
        ></GoogleLogout>
      </div>
    );
   }
}
