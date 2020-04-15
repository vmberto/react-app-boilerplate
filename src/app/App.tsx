import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import store from 'app/redux';
// ui
import Login from 'app/ui/auth/Login';
import Home from 'app/ui/home/Home';
// styles
import GlobalStyle from 'app/ui/common/GlobalStyle';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
          <Switch>
            <Route component={Login} exact path="/login" />
            <Home />
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
