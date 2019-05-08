import React, { Component } from 'react';
import { connect } from 'dva';
import { getPageQuery } from '../../utils/utils';
import styles from './WechatResult.less';

@connect(({ wechatResult }) => ({
  wechatResult
}))

class WechatResult extends Component {
  state = {};

  componentDidMount() {
    let params = getPageQuery();
    const { dispatch } = this.props;
    dispatch({
      type: 'wechatResult/login',
      payload: {
        ...params 
      },
      pathname:params.path?params.path:""
    });
  }

  render() {
    return (
      <div className={styles.main}> 
      </div>
    );
  }
}

export default WechatResult;
