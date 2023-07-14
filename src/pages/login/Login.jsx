import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MDBContainer } from 'mdb-react-ui-kit';

const Login = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line
      const res = await axios.post(process.env.REACT_APP_LOGIN_URI, user);
      alert('Login Successful');
      setLoginUser(res.data);
      navigate('/');
    } catch (err) {
      alert(err.response.data.message);
      navigate('/login');
    }
  };

  return (
    <>
      <MDBContainer className='mt-5'>
        <h1 className='text-center text-decoration-underline'>Login</h1>
        <div className='row justify-content-center align-items-center p-5'>
          <form
            onSubmit={handleSubmit}
            className='col-lg-5 border border-1 border-dark-subtle rounded-2 p-5 shadow-4-soft'>
            {/* <!-- Email input --> */}
            <div className='form-outline border border-1 border-secondary rounded-3 mb-4'>
              <input
                name='email'
                type='email'
                id='email'
                className='form-control'
                value={user.email}
                onChange={handleChange}
              />
              <label className='form-label' htmlFor='email'>
                Email address
              </label>
            </div>

            {/* <!-- Password input --> */}
            <div className='form-outline border border-1 border-secondary rounded-3 mb-4'>
              <input
                name='password'
                type='password'
                id='password'
                className='form-control'
                value={user.password}
                onChange={handleChange}
              />
              <label className='form-label' htmlFor='password'>
                Password
              </label>
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}
            <div className='row mb-4'>
              <div className='col d-flex justify-content-center'>
                {/* <!-- Checkbox --> */}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='form1Example3'
                  />
                  <label className='form-check-label' htmlFor='form1Example3'>
                    Remember me
                  </label>
                </div>
              </div>

              <div className='col'>
                {/* <!-- Simple link --> */}
                <Link to='/login'>Forgot password?</Link>
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <button type='submit' className='btn btn-primary btn-block'>
              Sign in
            </button>
          </form>
        </div>
      </MDBContainer>
    </>
  );
};

export default Login;
