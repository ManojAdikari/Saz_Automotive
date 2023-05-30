import { React, useState, Fragment } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import TestCar from '../images/TestCar.jpg';
import { nanoid } from "nanoid";
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

import EditableRow from '../components/EditableRow';
import ReadOnlyRow from '../components/ReadOnlyRow';
import { QUERY_SELECT_ALL_VEHICLE } from '../utils/queries';
var Amounts = 0;
var NewAmounts = 0;

const Profile = () => {
    let sumvalv = 0;
    let Newsumvalv = 0;
    let activities = [];
    const { loading, data } = useQuery(QUERY_SELECT_ALL_VEHICLE);
    const DbVehical = data?.getallVehicle || [];
    console.log(data);



    if (data !== null) {
        if (data !== undefined)
            for (var i = 0; i < data.allVehicle.length; i++) {
                var Make = data.allVehicle[i].Veh_Make;
                var Model = data.allVehicle[i].Veh_Model;
                var Color = data.allVehicle[i].Veh_Color;
                var Year = data.allVehicle[i].Veh_Year;
                var Newvehical = Make + " " + Model + " " + Color + " " + Year;
                activities.push([{val:data.allVehicle[i].Veh_id, text: Newvehical}]);

            }

    }
    console.log(activities);

    const [Vehicles, setContacts] = useState([]);

    const [addFormData, setAddFormData] = useState({
        Job: "",
        Note: "",
        Quantity: "",
        Amount: "",
    });

    const [editFormData, setEditFormData] = useState({
        Job: "",
        Note: "",
        Quantity: "",
        Amount: "",
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);

    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();



        const newContact = {
            id: nanoid(),
            Job: addFormData.Job,
            Note: addFormData.Note,
            Quantity: addFormData.Quantity,
            Amount: addFormData.Amount,

        };


        //////////////////////////////////////
        GetSum(addFormData.Amount, "Add");


        const newContacts = [...Vehicles, newContact];
        setContacts(newContacts);
        console.log(Vehicles);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {

        };

        const newContacts = [...Vehicles];

        const index = Vehicles.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };



    const handleCancelClick = () => {
        setEditContactId(null);
    };


    const handleDeleteClick = (contactId) => {
        const newContacts = [...Vehicles];

        const index = Vehicles.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);


        GetSum(Vehicles[index].Amount, "Remo");

    };
    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            Job: contact.Job,
            Note: contact.Note,
            Quantity: contact.Quantity,
            Amount: contact.Amount,
        };

        setEditFormData(formValues);
    };
    function GetSum(RowAmounts, AddRow) {

        if (AddRow === "Add") {




            if (RowAmounts !== 0) {

                NewAmounts = parseInt(Amounts) + parseInt(RowAmounts);
                Amounts = NewAmounts;
            }
            else {

                Amounts = RowAmounts;
                NewAmounts = Amounts;

            }
        }
        else {

            if (RowAmounts !== 0) {

                NewAmounts = parseInt(Amounts) - parseInt(RowAmounts);
                Amounts = NewAmounts;
            }

            else {

                Amounts = addFormData.Amount;
                NewAmounts = Amounts;

            }

        }
        console.log(Amounts);
        console.log(NewAmounts);


    }





    return (

        <main id="main" className="main">


            <div className="pagetitle">

            </div>
            <section className="section profile">
                <div className="row">
                    <div className="col-xl-4">

                        <div className="card">

                            <div className="form-floating">
                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option >Select Vehicle</option>

                                    {activities.map((item,index) => {

                                        return (
                                            <option key={index} value={item[0].val}> {item[0].text} </option>

                                             )


                                    })}
                                   
                                </select>
                                <label htmlFor="floatingSelect">Select Vehicle</label>
                            </div>
                            <img src={TestCar} alt="Profile" className="rounded-left" />




                        </div>

                    </div>

                    <div className="col-xl-8">

                        <div className="card">
                            <div className="card-body pt-3">

                                <div className="app-container">

                                    <h2>Add Services Details</h2>

                                    <div className="row mb-3">
                                        <label className="col-sm-2 col-form-label">Services Type</label>
                                        <div className="col-sm-10">
                                            <select className="form-select" placeholder="select Year" name='Veh_Year'>
                                                <option value="select Year">Select Services Type</option>
                                                <option value="Basic">Basic</option>
                                                <option value="2012">Mid Range</option>
                                                <option value="2023">Major</option>
                                            </select>
                                        </div>
                                    </div>

                                    <form onSubmit={handleAddFormSubmit}>




                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label">Job</label>
                                            <div className="col-sm-10">
                                                <select className="form-select"
                                                    type="text"
                                                    name="Job"
                                                    required="required"
                                                    placeholder="Enter a name..."
                                                    onChange={handleAddFormChange}>


                                                    <option value="select Job"> Select Job </option>
                                                    <option value="Change Engine oil">Change Engine oil</option>
                                                    <option value="Change Oil filter">Change Oil filter</option>
                                                    <option value="Check the air levels of all tyres">Check the air levels of all tyres</option>
                                                    <option value="Change/Topup Coolant">Change/Topup Coolant</option>
                                                    <option value="Change/Topup Power steering fluid">Change/Topup Power steering fluid</option>
                                                    <option value="Change/Topup Brake fluid">Change/Topup Brake fluid</option>
                                                    <option value="Change/Topup Transmission fluid">Topup Transmission fluid</option>
                                                    <option value="Change Air filter">Change Air filter</option>
                                                    <option value="Change Wiper blades">Change Wiper blades</option>
                                                    <option value="Change Tail lights">Change Tail lights</option>
                                                    <option value="Change Headlights">Change Headlights</option>
                                                    <option value="Change Indicator light">Change Indicator light</option>

                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label">Note</label>
                                            <div className="col-sm-10">
                                                <input
                                                    type="text"
                                                    name="Note"
                                                    required="required"
                                                    placeholder="Enter Description / Brand ..."
                                                    onChange={handleAddFormChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>


                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label"> Quantity</label>
                                            <div className="col-sm-10">
                                                <input
                                                    type="text"
                                                    name="Quantity"
                                                    required="required"
                                                    placeholder="Enter a quantity..."
                                                    onChange={handleAddFormChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label"> Amount</label>
                                            <div className="col-sm-10">
                                                <input
                                                    type="Number"
                                                    name="Amount"
                                                    required="required"
                                                    placeholder="Enter Amount..."
                                                    onChange={handleAddFormChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>


                                        <button type="submit" className="btn btn-primary">Add</button>
                                    </form>

                                    <form onSubmit={handleEditFormSubmit}>
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Job</th>
                                                    <th scope="col">Note</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col"> Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Vehicles.map((Vehicle) => (
                                                    <Fragment>
                                                        {editContactId === Vehicle.id ? (
                                                            <EditableRow
                                                                editFormData={editFormData}
                                                                handleEditFormChange={handleEditFormChange}
                                                                handleCancelClick={handleCancelClick}
                                                            />
                                                        ) : (
                                                            <ReadOnlyRow
                                                                contact={Vehicle}
                                                                handleEditClick={handleEditClick}
                                                                handleDeleteClick={handleDeleteClick}
                                                            />
                                                        )}
                                                    </Fragment>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label">Total</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" value={NewAmounts} disabled />
                                            </div>
                                        </div>

                                    </form>


                                </div>

                            </div>
                        </div>
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary" id='btnSave'   >Submit To System</button>
                        </div>

                    </div>
                </div>


            </section>

        </main>

    );
};

export default Profile;
