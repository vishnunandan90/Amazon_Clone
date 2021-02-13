import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51HQLcSBbnMw7q6OYITg78LxFwp47weQ1u2oKBgHjKnENoC9qLBPy5IRnpJTdnRMK3DP6p0mg8Bd7RZLNiImDs2N9008xULx8hh"
);
function App() {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();

  //use effect will run when app component loads..
  useEffect(() => {
    //following method runs when user signin state changed
    //this is for updating the user object in the state, that is how we maintain user info, just like principal in java
    auth.onAuthStateChanged((authUser) => {
      console.log("user is ", authUser);
      if (authUser) {
        //user session exists
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
    });
  }, []);
  return (
    // routes can be in different module as said in LCO
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header></Header>
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path="/payment">
            <Header></Header>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
