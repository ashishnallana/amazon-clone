import "./App.css";
import Header from "./components/Header";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./pages/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Search from "./pages/Search";
import Footer from "./components/Footer";

const promise = loadStripe(
  "pk_test_51NSHafSH8yAFZs0wdQV7oglXWhWlzzX4eHxfdMrFcawzLKSVP0zO0SlngI0YnoNmqWfSSJYadQtl3NI2xXV0EMMG00owJSEFTv"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        dispatch({
          type: "SET_USER",
          user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/search" Component={Search} />

          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
