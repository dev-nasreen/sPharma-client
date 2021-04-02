import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './Components/Header/Header';
import Login from "./Components/Login/Login";
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home/Home";
import CheckOut from "./Components/CheckOut/CheckOut";
import Order from "./Components/Order/Order";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddProduct from "./Components/Admin/AddProduct";
import AdminNav from "./Components/AdminNav/AdminNav";
import ManageProduct from "./Components/Admin/ManageProduct";
import Deals from "./Components/Deals/Deals";


export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser] }>
    <Router>
   
         <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home />
          </Route>
          <PrivateRoute path="/admin">
          <AdminNav></AdminNav>
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
          <AdminNav></AdminNav>
            <ManageProduct />
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
          <AdminNav></AdminNav>
            <AddProduct />
          </PrivateRoute>
          <PrivateRoute path="/order">
          <Header></Header>
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/checkOut/:_id">
          <Header></Header>
            <CheckOut />
          </PrivateRoute>
          <Route path="/login">
          <Header></Header>
            <Login />
          </Route>
          <Route path="/deals">
          <Header></Header>
            <Deals />
          </Route>
        </Switch>
      
    </Router>
    </userContext.Provider>
  );
}

export default App;
