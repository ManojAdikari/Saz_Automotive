import React, { useState } from 'react';
import { QUERY_MODEL_DATA } from '../utils/queries';
import { useQuery } from '@apollo/client';

const Vehiclemodeldata = () => {
    let activities = [];
    const { loading, data } = useQuery(QUERY_MODEL_DATA);
    const DbVehical = data?.allVehiclemodel || [];
    console.log(data);



    if (data !== null) {
        if (data !== undefined)
            for (var i = 0; i < data.allVehiclemodel.length; i++) {
        
            
                activities.push([{ val: data.allVehiclemodel[i].vehmodel, text: data.allVehiclemodel[i].vehmodel }]);
                

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

export default Vehiclemodeldata;
