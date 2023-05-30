import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useMutation } from '@apollo/client';
import { QUERY_SELECT_ALL_VEHICLE } from '../utils/queries';

import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Navigate, useParams } from 'react-router-dom';






const Viewallvehicle = () => {



    const { loading, data } = useQuery(QUERY_SELECT_ALL_VEHICLE);
    const DbVehical = data?.getallVehicle || [];
    // console.log(data.allVehicle);
    console.log(data);

    console.log(loading);

    var array = ["5"];


    var AllVehicale = null;
    if (data !== undefined) {
        AllVehicale = data.allVehicle.map((item, index) => {

           
                array.push(item.Veh_Make);
                console.log(array);
            
            
           
            return (
              
                <tr scope="row" key={index}>

                    <td>{item.Veh_id}</td>
                    <td>{item.Veh_Make}</td>
                    <td>{item.Veh_Model}</td>
                    <td>{item.Veh_Year}</td>
                    <td>{item.Veh_Color}</td>
                    <td>{item.Veh_Fual_Type}</td>
                    <td>{item.Veh_Vin}</td>
                    <td>{item.Veh_Purchase_Date}</td>
                    <td>{item.Veh_Rego_Number}</td>
                    <td>{item.Veh_Purchase_From}</td>
                    <td>{item.Veh_Amount}</td>


                </tr>
            )


        });

    }
    else {


    }







    return (
        <div className="ViewDashbordcard">



            <div className='container'>
                <div className='card'>
                    <div className='card-body'>

                        <table className="table table-hover">
                            <thead >
                                <tr>
                                    <th scope="col" >ID</th>
                                    <th scope="col">Make</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">Color</th>
                                    <th scope="col">Fual Tupe</th>
                                    <th scope="col">Vin Number</th>
                                    <th scope="col">Purchase Date</th>
                                    <th scope="col">Registration</th>
                                    <th scope="col">Last Owner</th>
                                    <th scope="col">Amount</th>

                                </tr>
                            </thead>
                            <tbody>
                                {AllVehicale}
                            </tbody>

                        </table>

                    </div>

                </div>
            </div>
            

        </div>
    );
};

export default Viewallvehicle;
