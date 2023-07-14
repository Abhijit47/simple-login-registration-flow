import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MDBContainer } from 'mdb-react-ui-kit';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: '',
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
      const res = await axios.post(
        process.env.REACT_APP_REGISTRATION_URI,
        user
      );
      alert(res.data.message);
      navigate('/login');
    } catch (err) {
      alert(err.response.data.message);
      navigate('/register');
    }
  };

  return (
    <MDBContainer className='mt-5'>
      <h1 className='text-center text-decoration-underline'>Sign-up</h1>
      <div className='row justify-content-center align-items-center p-5'>
        <form
          onSubmit={handleSubmit}
          className='col-lg-5 border border-1 border-dark-subtle rounded-2 p-5 shadow-4-soft'>
          {/* <!-- Name input --> */}
          <div className='form-outline border border-1 border-secondary rounded-2 mb-4'>
            <input
              name='name'
              type='text'
              id='name'
              className='form-control'
              value={user.name}
              onChange={handleChange}
            />
            <label className='form-label' htmlFor='name'>
              First name
            </label>
          </div>

          {/* <!-- Email input --> */}
          <div className='form-outline border border-1 border-secondary rounded-2 mb-4'>
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

          {/* <!-- Age input --> */}
          <div className='form-outline border border-1 border-secondary rounded-2 mb-4'>
            <input
              name='age'
              type='number'
              id='age'
              className='form-control'
              value={user.age}
              onChange={handleChange}
            />
            <label className='form-label' htmlFor='age'>
              Your age
            </label>
          </div>

          {/* <!-- Password input --> */}
          <div className='form-outline border border-1 border-secondary rounded-2 mb-4'>
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

          {/* <!-- Checkbox --> */}
          <div className='form-check d-flex justify-content-center mb-4'>
            <input
              className='form-check-input me-2'
              type='checkbox'
              value=''
              id='form2Example33'
            />
            <label className='form-check-label' htmlFor='form2Example33'>
              Subscribe to our newsletter
            </label>
          </div>

          {/* <!-- Submit button --> */}
          <button type='submit' className='btn btn-primary btn-block mb-4'>
            Sign up
          </button>

          {/* <!-- Register buttons --> */}
          <div className='text-center'>
            <p>or sign up with:</p>
            <button
              type='button'
              className='btn btn-secondary btn-floating mx-1'>
              <i className='fab fa-facebook-f'></i>
            </button>

            <button
              type='button'
              className='btn btn-secondary btn-floating mx-1'>
              <i className='fab fa-google'></i>
            </button>

            <button
              type='button'
              className='btn btn-secondary btn-floating mx-1'>
              <i className='fab fa-twitter'></i>
            </button>

            <button
              type='button'
              className='btn btn-secondary btn-floating mx-1'>
              <i className='fab fa-github'></i>
            </button>
          </div>
        </form>
      </div>
    </MDBContainer>
  );
};

export default Register;
