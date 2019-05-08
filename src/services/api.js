import { stringify } from 'qs';
import request from '../utils/request';

const genericurl = '/api/generic';

export async function wechatLogin(params) {
    return request(genericurl);
  }