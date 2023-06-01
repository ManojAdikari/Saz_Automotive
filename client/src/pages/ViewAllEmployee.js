import React, { useState,Fragment } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useMutation } from '@apollo/client';
import { QUERY_SELECT_ALL_EMPLOYEE } from '../utils/queries';
import EmployyReadOnlyRow from '../components/EmployyReadOnlyRow'
import { useQuery } from '@apollo/client';

import EditableRow from '../components/EmployeeEditableRow';
import ReadOnlyRow from '../components/EmployyReadOnlyRow';





const ViewAllEmployee = () => {

    

    const { loading, data } = useQuery(QUERY_SELECT_ALL_EMPLOYEE);
    const DbVehical = data?.GetallEmployee || [];
    // console.log(data.allVehicle);
    console.log(data);

    console.log(loading);

    var array = ["5"];


    var AllVehicale = null;
    if (data !== undefined) {
        AllVehicale = data.allEmployee.map((item, index) => {

           
                array.push(item.Veh_Make);
                console.log(array);
            
            
           
            return (
              
                <tr scope="row" key={index}>

                   <td>{item.empid}</td>
                    <td>{item.empfirstname}</td>
                    <td>{item.emplastname}</td>
                    <td>{item.empdateofbirth}</td>
                    <td>{item.empaddress}</td>
                    <td>{item.empphone}</td>
                    <td>{item.empemail}</td>
                    <td>{item.empjobtitle}</td>
         


                </tr>
            )


        });

    }
    else {


    }

    const [contacts, setContacts] = useState(data);

    const [addFormData, setAddFormData] = useState({

    
    empid: "",
    empfirstname: "",
    emplastname: "",
    empdateofbirth: "",
    empaddress: "",
    empphone: "",
    empemail: "",
    empjobtitle: "",

    });

    const [editFormData, setEditFormData] = useState({
       
    empid: "",
    empfirstname: "",
    emplastname: "",
    empdateofbirth: "",
    empaddress: "",
    empphone: "",
    empemail: "",
    empjobtitle: "",

      });
    
      const [editContactId, setEditContactId] = useState(null);

      
  
  

    return (
        <div className="ViewDashbordcard">



            <div className='container'>
                <div className='card'>
                    <div className='card-body'>

                        <table className="table table-hover">
                            <thead >
                                <tr>
                                    <th scope="col" >ID</th>
                                    <th scope="col">First_Name</th>
                                    <th scope="col">Last_Name</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Job_Title</th>
                                    
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

export default ViewAllEmployee;
