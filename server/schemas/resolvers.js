const { AuthenticationError } = require('apollo-server-express');
const { System_users } = require('../models');
const { Vehicle } = require('../models/Vehicals')
const { signToken } = require('../utils/auth');
const Vehicals = require('../models/Vehicals');


const resolvers = {
  Query: {
    users: async () => {
      return System_users.findAll();
    },
    user: async (parent, { username }) => {

      return System_users.findOne({ where: { username: username } });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        //return System_users.findByPk({ id: context.user.id });
       return System_users.findOne({ where: { username: context.user.username } });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
    allVehicle: async () => {
      return Vehicals.findAll();
    },

  
  },



  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await System_users.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

   

    login: async (parent, { email, password }) => {
      const user = await System_users.findOne({ where: { email: email } });


      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = System_users.findOne({ where: { password: password } });

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    
    addVehicale:async(parent,{Veh_Make ,Veh_Model ,Veh_Year ,Veh_Color,Veh_Fual_Type ,Veh_Vin ,Veh_Is_Registered ,Veh_Rego_Number ,Veh_Rego_End_Date,Veh_Purchase_From ,Veh_Purchase_Note ,Veh_Purchase_PPSR ,Veh_Purchase_Date ,Veh_Image1 ,Veh_Image2,Veh_Image3,Veh_Amount})=>{
      const Vehical = await Vehicals.create({ Veh_Make ,Veh_Model ,Veh_Year ,Veh_Color,Veh_Fual_Type ,Veh_Vin ,Veh_Is_Registered ,Veh_Rego_Number ,Veh_Rego_End_Date,Veh_Purchase_From ,Veh_Purchase_Note ,Veh_Purchase_PPSR ,Veh_Purchase_Date ,Veh_Image1 ,Veh_Image2,Veh_Image3,Veh_Amount });
 
      return { Vehical};
    }
  },
};

module.exports = resolvers;
