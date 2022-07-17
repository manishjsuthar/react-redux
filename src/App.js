import React from "react";
import HeaderContainer from "./containers/HeaderContainer";
import HomeContainer from "./containers/HomeContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckoutContainer from "./containers/CheckoutContainer";

function App() {
  return (
    <Router>
      <HeaderContainer />
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/checkout" exact component={CheckoutContainer} />
      </Switch>
    </Router>
  );
}

export default App;
