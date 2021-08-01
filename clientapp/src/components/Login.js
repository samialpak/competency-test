import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';
import { setCookie, getCookie, eraseCookie } from '../utils/cookie';

const clientId =
  '443012302229-gn78fie39jmot2e6sog718glqcl60ihs.apps.googleusercontent.com';

export default class Login extends React.Component {

   constructor(props){
      super(props);
   }

   onSuccess(res) {
     console.log('Login Success: currentUser:', res.profileObj);

     setCookie('id_token', res.tokenObj.id_token);

     alert(
       `Logged in successfully welcome ${res.profileObj.name}`
     );
     refreshTokenSetup(res);

     this.props.history.push("/user");
   };

   onFailure(res) {
     console.log('Login failed: res:', res);
     alert(
       `Failed to login.`
     );
   };

   render() {
    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={this.onSuccess.bind(this)}
          onFailure={this.onFailure.bind(this)}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
        />
      </div>
    );
   }
}
