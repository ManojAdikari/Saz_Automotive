import React from 'react';
import { QUERY_MAKE_DATA } from '../utils/queries'
import { useQuery } from '@apollo/client';


const VehiclemakeData = () => {
    let activities = [];
    
    const { loading, data } = useQuery(QUERY_MAKE_DATA);
    const DbVehical = data?.allVehicleMake || [];
    console.log(data);



    if (data !== null) {
        if (data !== undefined)
            for (var i = 0; i < data.allVehicleMake.length; i++) {
               
                activities.push([{ val: data.allVehicleMake[i].vehmake, text: data.allVehicleMake[i].vehmake }]);

                

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

export default VehiclemakeData;
