import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import noimage from '../images/NouserImage.png'

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  console.log(user);
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (

    <main id="main" className="main">


      <div className="pagetitle">

      </div>
      <section className="section profile">
        <div className="row">
          <div className="col-xl-4">

            <div className="card">
              <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                <img src={noimage} alt="Profile" className="rounded-circle" />
                <h2>{user.username}</h2>
                <h3>{user.email}</h3>

              </div>
            </div>

          </div>

          <div className="col-xl-8">

            <div className="card">
              <div className="card-body pt-3">

                <ul className="nav nav-tabs nav-tabs-bordered">

                  <li className="nav-item">
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                  </li>

                  <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                  </li>




                  <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                  </li>

                </ul>
                <div className="tab-content pt-2">

                  <div className="tab-pane fade show active profile-overview" id="profile-overview">
                    <h5 className="card-title">About</h5>
                    <p className="small fst-italic"> </p>

                    <h5 className="card-title">Profile Details</h5>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label ">Full Name</div>
                      <div className="col-lg-9 col-md-8">Manoj Adikari</div>
                    </div>

                 
                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Job</div>
                      <div className="col-lg-9 col-md-8">Manaeger</div>
                    </div>

                 

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Address</div>
                      <div className="col-lg-9 col-md-8">78 Pratte Av,Pooraka,5095,SA</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Phone</div>
                      <div className="col-lg-9 col-md-8">0451177703</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Email</div>
                      <div className="col-lg-9 col-md-8">Manojpadikari@gmail.com</div>
                    </div>

                  </div>

                  <div className="tab-pane fade profile-edit pt-3" id="profile-edit">


                    <form>
                      <div className="row mb-3">
                        <label className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                        <div className="col-md-8 col-lg-9">
                          <div className="col-sm-10">
                            <input className="form-control" type="file" id="formFile" />
                          </div>
                        </div>
                      </div>


                      <div className="row mb-3">
                        <label htmlFor="FirstName" className="col-md-4 col-lg-3 col-form-label">First Name</label>
                        <div className="col-md-8 col-lg-9">
                          <input type="text" className="form-control" id="FirstName" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="LastName" className="col-md-4 col-lg-3 col-form-label">Last Name</label>
                        <div className="col-md-8 col-lg-9">
                          <input type="text" className="form-control" id="LastName" />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label className="col-md-4 col-lg-3 col-form-label">Date Of Birth</label>
                        <div className="col-md-8 col-lg-9">
                          <input type="date" className="form-control" />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                        <div className="col-md-8 col-lg-9">
                          <input type="text" className="form-control" id="Address" />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                        <div className="col-md-8 col-lg-9">
                          <input type="text" className="form-control" id="Phone" />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                        <div className="col-md-8 col-lg-9">
                          <input type="email" className="form-control" id="Email" />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label htmlFor="Twitter" className="col-md-4 col-lg-3 col-form-label">Job Title</label>
                        <div className="col-md-8 col-lg-9">
                          <input type="text" className="form-control" id="Twitter" />
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary" >Update</button>
                      </div>
                    </form>

                  </div>

                  <div className="tab-pane fade pt-3" id="profile-settings">



                  </div>

                  <div className="tab-pane fade pt-3" id="profile-change-password">

                    <form>

                      <div className="row mb-3">
                        <label className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="password" type="password" className="form-control" id="currentPassword" />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label className="col-md-4 col-lg-3 col-form-label">New Password</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="newpassword" type="password" className="form-control" id="newPassword" />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="renewpassword" type="password" className="form-control" id="renewPassword" />
                        </div>
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">Change Password</button>
                      </div>
                    </form>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>

  );
};

export default Profile;
