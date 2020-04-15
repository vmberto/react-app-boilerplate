import React, { Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import routes from 'app/routes';

function Home() {
  return (
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
        <Switch>
          {routes.map(({ component, exact, path }, index) => <Route key={`route--${path}`} component={component} exact={exact} path={path} />)}
        </Switch>
      </Suspense>

    </div>
  );
}

export default Home;
