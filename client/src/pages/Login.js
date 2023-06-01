import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Signup from './Signup';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import LOGO from '../images/LOGO.png';


const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <>
      
      
    

 <div className="container">

<section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

        <div className="d-flex justify-content-center py-4">
          <a href="/home" className="logo d-flex align-items-center w-auto">
            <img src={LOGO} alt=""/>
       
          </a>
        </div>

        <div className="card mb-3">

          <div className="card-body">

            <div className="pt-4 pb-2">
              <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
              <p className="text-center small">Enter your username & password to login</p>
            </div>

            <form className="row g-3 needs-validation" noValidate onSubmit={handleFormSubmit}>

              <div className="col-12">
                <label htmlFor="yourUsername" className="form-label">Username</label>
                <div className="input-group has-validation">
                 
                  <input type="text" name="email" className="form-control"  placeholder="Enter email" onChange={handleChange} value={formState.email} id="yourUsername" required/>
                  <div className="invalid-feedback">Please enter your username.</div>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="yourPassword" className="form-label">Password</label>
                <input type="password" placeholder="Password" onChange={handleChange} value={formState.password} name="password" className="form-control" id="yourPassword" required/>
                <div className="invalid-feedback">Please enter your password!</div>
              </div>

              <div className="col-12">
               
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100" variant="primary" type="submit">Login</button>
              </div>
              <div className="col-12">
                
                
              </div>
            </form>

          </div>
        </div>

       

      </div>
    </div>
  </div>

</section>

</div>


      {error && (
        <Alert variant='danger'>
          {error.message}
        </Alert>
      )}
    </>
  );
};

export default Login;
