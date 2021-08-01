import React from 'react';
import { GoogleLogout } from 'react-google-login';

import { setCookie, getCookie, eraseCookie } from '../utils/cookie';

const clientId =
  '443012302229-gn78fie39jmot2e6sog718glqcl60ihs.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');

    eraseCookie('id_token');

    this.props.history.push("/");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
