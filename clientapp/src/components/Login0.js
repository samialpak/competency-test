import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';
import { setCookie, getCookie, eraseCookie } from '../utils/cookie';

const clientId =
  '443012302229-gn78fie39jmot2e6sog718glqcl60ihs.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);

    setCookie('id_token', res.id_token);

    alert(
      `Logged in successfully welcome ${res.profileObj.name}`
    );
    refreshTokenSetup(res);

    this.props.history.push("/user");
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
