import { setCookie, getCookie, eraseCookie } from './cookie';

export const refreshTokenSetup = (res) => {

  let refreshTiming = 30000; //(res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {

    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = 30000; //(newAuthRes.expires_in || 3600 - 5 * 60) * 1000;

    console.log('newAuthRes:', newAuthRes);

    localStorage.setItem('authToken', newAuthRes.id_token);
    setCookie('id_token', newAuthRes.id_token);

    setTimeout(refreshToken, refreshTiming);
  };
  
  setTimeout(refreshToken, refreshTiming);
};
