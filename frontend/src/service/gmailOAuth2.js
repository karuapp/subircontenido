import request from 'src/service/request.js'

export function startGmailOAuth2(whatsappId) {
  return request({
    url: `/gauth/gmail/${whatsappId}/start`,
    method: 'get'
  })
}

export function handleGmailOAuth2Callback(code, whatsappId) {
  return request({
    url: `/gauth/gmail/callback?code=${code}&whatsappId=${whatsappId}`,
    method: 'get'
  })
}

export function refreshGmailToken(whatsappId, refreshToken) {
  return request({
    url: `/gauth/gmail/${whatsappId}/refresh`,
    method: 'post',
    data: {
      refresh_token: refreshToken
    }
  })
}

export function verifyGmailToken(whatsappId, accessToken) {
  return request({
    url: `/gauth/gmail/${whatsappId}/verify?token=${accessToken}`,
    method: 'get'
  })
}

export function getGmailUserInfo(whatsappId, accessToken) {
  return request({
    url: `/gauth/gmail/${whatsappId}/userinfo?token=${accessToken}`,
    method: 'get'
  })
}

export function getGmailOAuth2Url(whatsappId) {
  const apiUrl = process.env.URL_API || 'http://localhost:3101';
  return `${apiUrl}/gauth/gmail/${whatsappId}/start`;
}

export function getGmailCallbackUrl() {
  const baseUrl = window.location.origin;
  return `${baseUrl}/gmail/callbackUrlBack`;
}

export function getGmailCallbackUrlWithParams(params = '') {
  const callbackUrl = getGmailCallbackUrl();
  return `${callbackUrl}${params}`;
}

export function getGmailRedirectUrl() {
  const baseUrl = window.location.origin;
  return `${baseUrl}/#/gmail/callbackUrlBack`;
}

export function getGmailRedirectUrlWithParams(params = '') {
  const redirectUrl = getGmailRedirectUrl();
  return `${redirectUrl}${params}`;
}

export function buildGmailRedirectUrlFromCurrentLocation() {
  const currentParams = window.location.search;
  return getGmailRedirectUrlWithParams(currentParams);
}

export function redirectToGmailCallback() {
  const redirectUrl = getGmailRedirectUrlWithParams(window.location.search);
  window.location.href = redirectUrl;
}
