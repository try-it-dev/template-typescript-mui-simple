import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
