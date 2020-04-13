import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./ui/common/GlobalStyle";
import Login from "app/ui/auth/Login";
import Home from "app/ui/home/Home";
import PrivateRoute from "app/ui/auth/PrivateRoute";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Suspense fallback="Loading..">
        <Route component={Login} exact={true} path={'/login'} />
        <PrivateRoute component={Home} auth={false} />
      </Suspense>
    </Router>
  );
}

export default App;