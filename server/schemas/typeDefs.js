const { gql } = require('apollo-server-express');

const typeDefs = gql`
 type System_users {
  id: ID! 
  username: String
  email: String
  password: String
}

type Vehicals {
 
  Veh_id:ID!
  Veh_Make:String
  Veh_Model:String
  Veh_Year:String
  Veh_Color:String
  Veh_Fual_Type:String
   Veh_Vin:String
    Veh_Is_Registered:String
     Veh_Rego_Number:String
      Veh_Rego_End_Date:String
      Veh_Purchase_From :String
      Veh_Purchase_Note:String 
      Veh_Purchase_PPSR:String 
      Veh_Purchase_Date:String
       Veh_Image1:String 
       Veh_Image2:String
       Veh_Image3:String
       Veh_Amount:String
}

type VehicleMake {
 vehid:ID!
 vehmake:String
}


type VehicleModel {
 
  vehid:ID!
  vehmake:String!
  vehmodel:String!

}

type employee {
 
  empid:ID!
  empfirstname:String!
  emplastname:String!
  empdateofbirth:String
  empaddress:String
  empphone:String
  empemail:String
  empjobtitle:String

}

     type Query {
        users: [System_users]
        user(username: String!): System_users
        me: System_users
        allVehicle:[Vehicals]
        allVehicleMake:[VehicleMake]
        getvehicleModel(vehmake: String!):VehicleModel
        allEmployee:[employee]

    }

    type Auth {
    token: ID
    user: System_users
    allVehicle:[Vehicals]
      
   

    }
  
    type Mutation {
      addUser(username: String!, email: String!, password: String!): Auth
      login(email: String!, password: String!): Auth
      addVehicale(Veh_Make:String!, Veh_Model:String!, Veh_Year:String!,Veh_Color:String!,Veh_Fual_Type:String!, Veh_Vin:String, Veh_Is_Registered:String, Veh_Rego_Number:String,Veh_Rego_End_Date:String,Veh_Purchase_From :String,Veh_Purchase_Note:String ,Veh_Purchase_PPSR:String ,Veh_Purchase_Date:String,Veh_Image1:String ,Veh_Image2:String,Veh_Image3:String,Veh_Amount:String): Auth
      addvehicleMake(vehmake:String!): VehicleMake
      addvehiclemodel(vehmake:String!,vehmodel:String!): VehicleModel
      addEmployee(empfirstname:String!,emplastname:String!,empdateofbirth:String!,empaddress:String!,empphone:String!,empemail:String!, empjobtitle:String!) : employee

    }

  
`;

module.exports = typeDefs;
