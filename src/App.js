import React from 'react';
import 'antd/dist/antd.css';
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import Thunk from 'redux-thunk';
import AppDashboard from './components/dashboard/AppDashboard';

const reducers = () => ({});

const store = createStore(reducers, {}, applyMiddleware(Thunk));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact to="/" component={AppDashboard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
