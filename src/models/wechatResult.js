import { routerRedux } from 'dva/router';
import { wechatLogin } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'wechatResult',

  state: {
    code: undefined,
    type: undefined,
    msg: undefined,
    currentUser:{},
  },

  effects: {
    *login({ payload, pathname}, { call, put }) {
      const response = yield call(wechatLogin, payload);
      response.currentAuthority = response.usertype;
      response.type = 'account';
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully
      console.log(response)
      if (response.code === '1000') {
        setAuthority(response.currentAuthority);
        reloadAuthorized();
        if (pathname && payload.state) {
          yield put(routerRedux.replace(pathname));
          return;
        }
        yield put(routerRedux.replace("/emr/pacients"))
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        code: payload.code,
        type: payload.type,
        currentUser:payload
      };
    },
  },
};
