import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>





      <div className="container">

        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                <div className="d-flex justify-content-center py-4">

                </div>

                <div className="card mb-3">

                  <div className="card-body">

                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                      <p className="text-center small">Enter your personal details to create account</p>
                    </div>


                    {data ? (
                      <Alert variant='success'>
                      
                    </Alert>
                    ) : (

                      <form className="row g-3 needs-validation" noValidate onSubmit={handleFormSubmit}>
                        <div className="col-12">
                          <label htmlFor="yourName" className="form-label">Select Name</label>

                          <select className="form-select" id="yourName" required onChange={handleChange} value={formState.username} name='username' >
                            <option value="Select Name">Select Name</option>
                            <option value="TestUserOne">TestUserOne</option>
                            <option value="TestUserTwo">TestUserTwo</option>
                          </select>
                        </div>

                        <div className="col-12">
                          <label htmlFor="yourEmail" className="form-label">Your Email</label>
                          <input type="email" name="email" className="form-control" id="yourEmail" required onChange={handleChange} value={formState.email} />
                          <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                        </div>



                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">Password</label>
                          <input type="password" name="password" className="form-control" id="yourPassword" onChange={handleChange} value={formState.password} required />
                          <div className="invalid-feedback">Please enter your password!</div>
                        </div>

                        <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                            <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                            <div className="invalid-feedback">You must agree before submitting.</div>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">Create Account</button>
                        </div>
                        <div className="col-12">

                        </div>
                      </form>
                    )}
                    {error && (
                      <Alert variant='danger'>
                        {error.message}
                      </Alert>
                    )}
                  </div>
                </div>

                <div className="credits">

                </div>

              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  );

};

export default Signup;
