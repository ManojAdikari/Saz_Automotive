import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {

    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });

    const user = data?.me || data?.user || {};
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


                    <div className="col-xl-8">

                        <div className="card">
                            <div className="card-body pt-3">

                                <ul className="nav nav-tabs nav-tabs-bordered">


                                    <li className="nav-item">
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Add New Employee</button>
                                    </li>


                                </ul>
                                <div className="tab-content pt-2">


                                    <div className="tab-pane fade show active profile-overview" id="profile-edit">


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
                                                    <input name="FirstName" type="text" className="form-control" id="FirstName" />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label htmlFor="LastName" className="col-md-4 col-lg-3 col-form-label">Last Name</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="LastName" type="text" className="form-control" id="LastName" />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label  className="col-md-4 col-lg-3 col-form-label">Date Of Birth</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="address" type="text" className="form-control" id="Address" />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="phone" type="text" className="form-control" id="Phone" />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="email" type="email" className="form-control" id="Email" />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label htmlFor="Twitter" className="col-md-4 col-lg-3 col-form-label">Job Title</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="twitter" type="text" className="form-control" id="Twitter" />
                                                </div>
                                            </div>

                                         

                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary">Save</button>
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
