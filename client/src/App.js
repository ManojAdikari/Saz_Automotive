import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar/TopBar';
import Addnewvehicle from './pages/AddVehicle';
import ViewAllVehicle from './pages/ViewAllVehicle';
import GeneralServices from './pages/GeneralServices';
import AddEmployee from './pages/AddEmployee';
import Repairs from './pages/Repairs';
import AddMakeModek from './pages/AddMakeModek';


import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/bootstrap-icons/bootstrap-icons.css';
import './vendor/boxicons/css/boxicons.min.css';
import './vendor/quill/quill.snow.css';
import './vendor/quill/quill.bubble.css';
import './vendor/remixicon/remixicon.css';
import './vendor/simple-datatables/style.css';
import './vendor/bootstrap/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Homestyles.css';
import './css/style.css';
import './js/main.js'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (

    <ApolloProvider client={client}>



      {window.location.pathname !== '/' && <Sidebar />}

      <Router>

        <div >

          <div className="container">

            <Routes>
              <Route
                path="/"
                element={<Login />}
              />

              <Route
                path="/login"
                element={<Login />}
              />


              <Route
                path="/home"
                element={<Home />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/me"
                element={<Profile />}
              />
              <Route
                path="/profiles/:username"
                element={<Profile />}
              />
              <Route
                path="/addnewvehicle"
                element={<Addnewvehicle />}
              />
              <Route
                path="/ViewAllVehicle"
                element={<ViewAllVehicle />}
              />
              <Route
                path="/GeneralServices"
                element={<GeneralServices />}
              />
              <Route
                path="/addEmployee"
                element={<AddEmployee />}
              />
              <Route
                path="/Repairs"
                element={<Repairs />}
              />
              <Route
                path="/AddmakeModek"
                element={<AddMakeModek />}
              />


            </Routes>


          </div>

          <Footer />
        </div>

      </Router>

    </ApolloProvider>
  );
}

export default App;
