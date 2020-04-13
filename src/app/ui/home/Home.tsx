import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from "app/routes";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product/1">First Product</Link>
            </li>
            <li>
              <Link to="/product/2">Second Product</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback="Loading..">
          {routes.map(({ component, exact, path }, index) => <Route key={index} component={component} exact={exact} path={path} />)}
        </Suspense>

      </div>
    </Router>
  );
}

export default App;