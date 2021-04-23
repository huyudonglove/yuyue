import Cookies from 'js-cookie';
import { AUTHORITY_KEY, USER_TOKEN_KEY, USER_USER_DATA ,USER_ID_KEY} from './constants';

export function getToken () {
  return Cookies.get(USER_TOKEN_KEY);
}

export function setToken (token) {
  return Cookies.set(USER_TOKEN_KEY, token);
}

export function removeToken () {
  return Cookies.remove(USER_TOKEN_KEY);
}

export function getUserData () {
  let userData = Cookies.get(USER_USER_DATA);
  userData && JSON.parse(userData);
  return userData && JSON.parse(userData);
}

export function setUserData (userData) {
  if (typeof userData === 'object') {
    userData = JSON.stringify(userData);
  }
  return Cookies.set(USER_USER_DATA, userData);
}

export function removeUserData () {
  return Cookies.remove(USER_USER_DATA);
}

export function getAuthorityInfo () {
  return Cookies.get(AUTHORITY_KEY);
}

export function setAuthorityInfo (authInfo) {
  return Cookies.set(AUTHORITY_KEY, authInfo);
}

export function removeAuthorityInfo () {
  return Cookies.remove(AUTHORITY_KEY);
}
export function getUID() {
  return Cookies.get(USER_ID_KEY);
}

export function setUID(uid) {
  return Cookies.set(USER_ID_KEY, uid);
}

export function removeUID() {
  return Cookies.remove(USER_ID_KEY);
}