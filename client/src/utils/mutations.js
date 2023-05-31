const { gql } = require('@apollo/client') ;

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
         id
        username
      }
    }
  }
`;

 const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;
const ADD_NEW_VEHHICLE = gql`
mutation addVehicale($Veh_Make:String!, $Veh_Model:String!, $Veh_Year:String!,$Veh_Color:String!,$Veh_Fual_Type:String!, $Veh_Vin:String, $Veh_Is_Registered:String, $Veh_Rego_Number:String,$Veh_Rego_End_Date:String,$Veh_Purchase_From :String,$Veh_Purchase_Note:String ,$Veh_Purchase_PPSR:String ,$Veh_Purchase_Date:String,$Veh_Image1:String ,$Veh_Image2:String,$Veh_Image3:String,$Veh_Amount:String) {
  addVehicale(Veh_Make: $Veh_Make ,Veh_Model: $Veh_Model ,Veh_Year: $Veh_Year ,Veh_Color: $Veh_Color,Veh_Fual_Type: $Veh_Fual_Type ,Veh_Vin: $Veh_Vin ,Veh_Is_Registered: $Veh_Is_Registered ,Veh_Rego_Number: $Veh_Rego_Number ,Veh_Rego_End_Date: $Veh_Rego_End_Date,Veh_Purchase_From: $Veh_Purchase_From ,Veh_Purchase_Note: $Veh_Purchase_Note ,Veh_Purchase_PPSR: $Veh_Purchase_PPSR  ,Veh_Purchase_Date: $Veh_Purchase_Date ,Veh_Image1: $Veh_Image1 ,Veh_Image2: $Veh_Image2,Veh_Image3: $Veh_Image3,Veh_Amount: $Veh_Amount) {
                                                                                                                                                                                                                                                                                                                                                                                                         
    token
    user {
      id
      username
    }
  }
}
`;

const ADD_NEW_EMPLOYEE = gql`
mutation addEmployee($empfirstname :String! ,$emplastname :String!,$empdateofbirth :String!,$empaddress :String!,$empphone :String!,$empemail :String!,$empjobtitle :String!) {
  addEmployee(empfirstname :$empfirstname ,emplastname :$emplastname,empdateofbirth :$empdateofbirth,empaddress :$empaddress,empphone :$empphone,empemail :$empemail,empjobtitle :$empjobtitle) {
                                                                                                                                                                                                                                                                                                                                                                                                         
    token
    user {
      id
      username
    }
  }
}
`;

module.exports = {LOGIN_USER,ADD_USER,ADD_NEW_VEHHICLE,ADD_NEW_EMPLOYEE};