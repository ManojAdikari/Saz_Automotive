import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useMutation } from '@apollo/client';
import  ADD_Model  from '../utils/mutations';
import VehiclemakeData from './VehiclemakeData';


const Vehiclemodels = () => {


    const [formState, setFormState] = useState({

        vehmake: '',
        vehmake1: '',
        vehmodel: '',


    });
    const [addEmployee, { error, data }] = useMutation(ADD_Model);

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

        <div className="col-lg-6">

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Add Vehicle Model</h5>


                    {data ? (
                        <Alert variant='success'>
                            <p>successfully created</p>
                        </Alert>
                    ) : (

                        <Form id='VehicalData'>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Make</label>
                                <div className="col-sm-10">
                                    <select className="form-select" placeholder="Select make" onChange={handleChange} value={formState.Veh_Make} name='vehmake'>
                                        <option value="select Make">Select make</option>
                                        <VehiclemakeData/>
                                    </select>
                                </div>
                            </div>


                            <div className="row mb-3">
                                <label htmlFor="FirstName" className="col-md-4 col-lg-3 col-form-label">Vehicle Model</label>
                                <div className="col-md-8 col-lg-9">
                                    <input type="text" className="form-control" id="FirstName" onChange={handleChange} value={formState.Veh_Make} name='vehmodel' />
                                </div>
                            </div>




                            <div className="row mb-3">

                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary" id='btnSave' onClick={handleFormSubmit}  >Submit To System</button>
                                </div>
                            </div>

                        </Form>
                    )}
                    {error && (
                        <Alert variant='danger'>
                            {error.message}
                        </Alert>
                    )}

                </div>
            </div>

        </div>



    );

};
export default Vehiclemodels;