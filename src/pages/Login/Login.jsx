import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Header from '../../components/Header/Header'
function Login() {
  return (
    <div>
      <Header />
    <div className='container'>
      <div className="row">
        <div className='column'>
          <LoginForm />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
