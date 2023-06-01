import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useMutation } from '@apollo/client';
import { ADD_NEW_VEHHICLE } from '../utils/mutations';
import Auth from '../utils/auth';
import axios from "axios"
import e from 'cors';
import VehicalmakeData from '../components/VehicalmakeData';
import Veheckemodeldta from '../components/Vehiclemodeldata';
const Addnewvehicle = () => {

    const [formState, setFormState] = useState({

        Veh_Make: '',
        Veh_Model: '',
        Veh_Year: '',
        Veh_Color: '',
        Veh_Fual_Type: '',
        Veh_Vin: '',
        Veh_Is_Registered: '',
        Veh_Rego_Number: '',
        Veh_Rego_End_Date: '',
        Veh_Purchase_From: '',
        Veh_Purchase_Note: '',
        Veh_Purchase_PPSR: '',
        Veh_Purchase_Date: '',
        Veh_Image1: '',
        Veh_Image2: '',
        Veh_Image3: '',
        Veh_Amount: "" ,
    });
    const [file,setFile] = useState("");

    const [addnewvehicle, { error, data }] = useMutation(ADD_NEW_VEHHICLE);


    
  
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
            const { data } = await addnewvehicle({
                variables: { ...formState },
            });

            
            window.location.reload();
           // Auth.login(data.addUser.token);
          

        } catch (e) {
            console.error(e);
        }
    };




    const addUserData = async(e)=>{
       

        try {
            await axios.post("http://localhost:3001/api/InsertData/SaveVehical",formState);

        }
        catch(err) {
      console.log(err)

        }
    }


        
    

    return (
        <>
            {data ? (
                <p>
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
                </p>
            ) : (
                <main id="main" className="main">

                    <section className="section">
                        <div className="row">
                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Vehicel Details</h5>


                                        <Form id='VehicalData'>

                                            <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label">Make</label>
                                                <div className="col-sm-10">
                                                    <select className="form-select" placeholder="select Make" onChange={handleChange} value={formState.Veh_Make} name='Veh_Make'>
                                                    <option value="2000">Select Make</option>
                                                    <VehicalmakeData/>


                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label">Model</label>
                                                <div className="col-sm-10">
                                                    <select className="form-select" placeholder="select Model" onChange={handleChange} value={formState.Veh_Model} name='Veh_Model'>
                                                    <option value="2000">Select Model</option>
                                                        <Veheckemodeldta />
                                                        
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label">Year</label>
                                                <div className="col-sm-10">
                                                    <select className="form-select" placeholder="select Year" onChange={handleChange} value={formState.Veh_Year} name='Veh_Year'>
                                                        <option value="select Year">select Year</option>
                                                        <option value="1990">1990</option>
                                                        <option value="1991">1991</option>
                                                        <option value="1993">1993</option>
                                                        <option value="1995">1995</option>
                                                        <option value="1996">1996</option>
                                                        <option value="1997">1997</option>
                                                        <option value="1998">1998</option>
                                                        <option value="1999">1999</option>
                                                        <option value="2000">2000</option>
                                                        <option value="2001">2001</option>
                                                        <option value="2002">2002</option>
                                                        <option value="2003">2003</option>
                                                        <option value="2004">2004</option>
                                                        <option value="2005">2005</option>
                                                        <option value="2006">2006</option>
                                                        <option value="2007">2007</option>
                                                        <option value="2008">2008</option>
                                                        <option value="2009">2009</option>
                                                        <option value="2010">2010</option>
                                                        <option value="2011">2011</option>
                                                        <option value="2012">2012</option>
                                                        <option value="2013">2013</option>
                                                        <option value="2014">2014</option>
                                                        <option value="2015">2015</option>
                                                        <option value="2016">2016</option>
                                                        <option value="2017">2017</option>
                                                        <option value="2018">2018</option>
                                                        <option value="2019">2019</option>
                                                        <option value="2020">2020</option>
                                                        <option value="2021">2021</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label">Color</label>
                                                <div className="col-sm-10">
                                                    <select className="form-select" placeholder="select Color" onChange={handleChange} value={formState.Veh_Color} name='Veh_Color'>
                                                        <option value="select Color">Select Color</option>
                                                        <option value="White">White</option>
                                                        <option value="Black">Black</option>
                                                        <option value="Gray">Gray</option>
                                                        <option value="Silver">Silver</option>
                                                        <option value="Blue">Blue</option>
                                                        <option value="Red">Red</option>
                                                        <option value="Brown">Brown</option>
                                                        <option value="Green">Green</option>
                                                        <option value="Orange">Orange</option>
                                                        <option value="Beige">Beige</option>
                                                        <option value="Purple">Purple</option>
                                                        <option value="Gold">Gold</option>
                                                        <option value="Yellow">Yellow</option>
                                                      

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label">Fuel Type</label>
                                                <div className="col-sm-10">
                                                    <select className="form-select" placeholder="select Fuel Type" onChange={handleChange} value={formState.Veh_Fual_Type} name='Veh_Fual_Type'>
                                                        <option value="select Fuel Type">select Fuel Type</option>
                                                        <option value="Ethanol Blend E10">E10</option>
                                                        <option value="Regular unleaded petrol 91">petrol 91</option>
                                                        <option value="Premium unleaded petrol 95 and 98">petrol 95/98</option>
                                                        <option value="E85">E85</option>
                                                        <option value="Diesel">Diesel</option>
                                                        <option value="Liquefied petroleum gas LPG">LPG</option>
                                                        <option value="petrol And gas LPG">petrol And gas LPG</option>
                                                        <option value="Diesel And gas LPG">Diesel And gas LPG</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label">Vin</label>
                                                <div className="col-sm-10">
                                                    <input type="text" placeholder="Enter Vin Number" className="form-control" onChange={handleChange} value={formState.Veh_Vin} name='Veh_Vin'/>
                                                </div>
                                            </div>
                                            <fieldset className="row mb-3">
                                                <legend className="col-form-label col-sm-2 pt-0">Rego</legend>
                                                <div className="col-sm-10">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" nameg="gridRadios" id="gridRadios1"  checked onChange={handleChange} value={formState.Veh_Is_Registered} name='Veh_Is_Registered' />
                                                        <label className="form-check-label" htmlFor="gridRadios1">
                                                            Registered
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" nameg="gridRadios" id="gridRadios2"   onChange={handleChange} value={formState.Veh_Is_Registered} name='Veh_Is_Registered'/>
                                                        <label className="form-check-label" htmlFor="gridRadios2">
                                                            Unregistered
                                                        </label>
                                                    </div>

                                                </div>
                                            </fieldset>
                                            <div className="row mb-3">
                                                <label  className="col-sm-2 col-form-label">Rego Num</label>

                                                <div className="col-sm-10">
                                                    <input type="text" placeholder="Enter Vehicle registration number" className="form-control"onChange={handleChange} value={formState.Veh_Rego_Number} name='Veh_Rego_Number' />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label  className="col-sm-2 col-form-label">Rego End</label>
                                                <div className="col-sm-10">
                                                    <input type="date" className="form-control" onChange={handleChange} value={formState.Veh_Rego_End_Date} name='Veh_Rego_End_Date' />
                                                </div>
                                            </div>



                                        </Form>

                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Purchase Details </h5>

                                        <Form id='VehicalData2'>

                                            <div className="row mb-3">
                                                <label  className="col-sm-2 col-form-label">Purchase Form</label>
                                                <div className="col-sm-10">
                                                    <input type="text" placeholder="Enter Previous owner" className="form-control" onChange={handleChange} value={formState.Veh_Purchase_From} name='Veh_Purchase_From' />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label  className="col-sm-2 col-form-label">Purchase Note</label>
                                                <div className="col-sm-10">
                                                    <input className="form-control" type="file" id="formFile" onChange={handleChange} value={formState.Veh_Purchase_Note} name='Veh_Purchase_Note'/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label  className="col-sm-2 col-form-label">PPSR Report</label>
                                                <div className="col-sm-10">
                                                    <input className="form-control" type="file" id="formFile"  onChange={handleChange} value={formState.Veh_Purchase_PPSR} name='Veh_Purchase_PPSR' />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label  className="col-sm-2 col-form-label">Purchase Date</label>
                                                <div className="col-sm-10">
                                                    <input type="date" className="form-control" onChange={handleChange} value={formState.Veh_Purchase_Date} name='Veh_Purchase_Date'/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label className="col-sm-2 col-form-label">Image 1</label>
                                                <div className="col-sm-10">
                                                    <input className="form-control" type="file" id="formFile" onChange={handleChange} name='Veh_Image1' />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label  className="col-sm-2 col-form-label">Image 2</label>
                                                <div className="col-sm-10">
                                                    <input className="form-control" type="file" id="formFile" onChange={handleChange} value={formState.Veh_Image2} name='Veh_Image2'/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label  className="col-sm-2 col-form-label">Image 3 </label>
                                                <div className="col-sm-10">
                                                    <input className="form-control" type="file" id="formFile" onChange={handleChange} value={formState.Veh_Image3} name='Veh_Image3'/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label  className="col-sm-2 col-form-label"> Amount</label>
                                                <div className="col-sm-10">
                                                    <input type="number" className="form-control" onChange={handleChange} value={formState.Veh_Amount} name='Veh_Amount' />
                                                </div>
                                            </div>



                                        </Form>

                                    </div>
                                </div>

                            </div>


                        </div>
                        <div className="row mb-3">

                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary" id='btnSave' onClick={ handleFormSubmit}  >Submit To System</button>
                            </div>
                        </div>
                    </section>

                </main>
            )}
            {error && (
                <Alert variant='danger'>
                    {error.message}
                </Alert>
            )}
        </>

    );

};
export default Addnewvehicle;