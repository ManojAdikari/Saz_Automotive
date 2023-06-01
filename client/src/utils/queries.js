
import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      id
      username
      email
    }
  }
  
`;

export const QUERY_SELECT_ALL_VEHICLE = gql`
 query getallVehicle {
  allVehicle{
    Veh_id
    Veh_Make
    Veh_Model
    Veh_Year
    Veh_Color
    Veh_Fual_Type
     Veh_Vin
      Veh_Is_Registered
       Veh_Rego_Number
        Veh_Rego_End_Date
        Veh_Purchase_From
        Veh_Purchase_Date   
         Veh_Amount
  }
}

`;

export const QUERY_SELECT_ALL_EMPLOYEE = gql`
 query GetallEmployee{
  allEmployee{
    empid
    empfirstname
    emplastname
    empdateofbirth
    empaddress
    empphone
    empemail
    empjobtitle
  }
}

`;

export const QUERY_MAKE_DATA = gql`
  query allVehicleMake {
    allVehicleMake {
      vehmake
    }
  }
  
`;
export const QUERY_MODEL_DATA = gql`
  query allVehiclemodel {
    allVehiclemodel {
      vehmodel
    }
  }
  
`;

