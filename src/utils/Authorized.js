import RenderAuthorized from '@/components/Authorized';
import { getAuthority } from './authority';
import cookie from 'react-cookies'

let Authorized = RenderAuthorized(getAuthority()); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = () => {
  Authorized = RenderAuthorized(getAuthority());
};
const saveToken = token => {
  return cookie.save('token', token, { path: '/' });
};

const resetToken = () => {
  return cookie.remove('token', { path: '/' })
};

const getToken = () => {
  return cookie.load('token');
};
export { reloadAuthorized, saveToken, resetToken, getToken };
export default Authorized;
