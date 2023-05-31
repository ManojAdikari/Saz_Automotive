import React, { useState } from 'react';
import { ADD_NEW_EMPLOYEE } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Alert from 'react-bootstrap/Alert';


const Profile = () => {

    const [formState, setFormState] = useState({

        empprofilpic: '',
        empfirstname: '',
        emplastname: '',
        empdateofbirth: '',
        empaddress: '',
        empphone: '',
        empemail: '',
        empjobtitle: '',

    });
    const [addEmployee, { error, data }] = useMutation(ADD_NEW_EMPLOYEE);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };
    console.log(formState);
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log(formState);

        try {
            const { data } = await addEmployee({
                variables: { ...formState },
            });
            window.location.reload();

        } catch (e) {
            console.error(e);
        }
    };


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
                                        {data ? (
                                            <Alert variant='success'>
                                                <p>successfully created</p>
                                            </Alert>
                                        ) : (

                                            <form>
                                                <div className="row mb-3">
                                                    <label className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <div className="col-sm-10">
                                                            <input className="form-control" type="file" id="formFile" onChange={handleChange} value={formState.Veh_Make} name='empprofilpic' />
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="row mb-3">
                                                    <label htmlFor="FirstName" className="col-md-4 col-lg-3 col-form-label">First Name</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input type="text" className="form-control" id="FirstName" onChange={handleChange} value={formState.Veh_Make} name='empfirstname' />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="LastName" className="col-md-4 col-lg-3 col-form-label">Last Name</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input type="text" className="form-control" id="LastName" onChange={handleChange} value={formState.Veh_Make} name='emplastname' />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label className="col-md-4 col-lg-3 col-form-label">Date Of Birth</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input type="date" className="form-control" onChange={handleChange} value={formState.Veh_Make} name='empdateofbirth' />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input type="text" className="form-control" id="Address" onChange={handleChange} value={formState.Veh_Make} name='empaddress' />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input type="text" className="form-control" id="Phone" onChange={handleChange} value={formState.Veh_Make} name='empphone' />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input type="email" className="form-control" id="Email" onChange={handleChange} value={formState.Veh_Make} name='empemail' />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <label htmlFor="Twitter" className="col-md-4 col-lg-3 col-form-label">Job Title</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input type="text" className="form-control" id="Twitter" onChange={handleChange} value={formState.Veh_Make} name='empjobtitle' />
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary" onClick={handleFormSubmit} >Save</button>
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

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>

    );
};

export default Profile;
