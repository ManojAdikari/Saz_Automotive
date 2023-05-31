import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { QUERY_SELECT_ALL_EMPLOYEE } from '../utils/queries'
import { useQuery } from '@apollo/client';

const AllEmployeeSelect = () => {
    let activities = [];
    const { loading, data } = useQuery(QUERY_SELECT_ALL_EMPLOYEE);
    const DbVehical = data?.GetallEmployee || [];
    console.log(data);



    if (data !== null) {
        if (data !== undefined)
            for (var i = 0; i < data.allEmployee.length; i++) {
                var empfirstname = data.allEmployee[i].empfirstname;
                var emplastname = data.allEmployee[i].emplastname;
                
                var Newvehical = empfirstname + " " + emplastname ;
                activities.push([{ val: data.allEmployee[i].empid, text: Newvehical }]);

                

            }

    }
    console.log(activities);



    return (


                activities.map((item, index) => {

                    return (
                        <option key={index} value={item[0].val}>{item[0].text} </option>

                    )


                })

            
        


    );
};

export default AllEmployeeSelect;
