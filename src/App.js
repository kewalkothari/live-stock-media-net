import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import StocksComponent from './Containers/StocksComponent/StocksComponent';

function App() {
  return (
    <Switch>
        <Route path="/stocks" component={StocksComponent} />
    </Switch>
  );
}

export default App;
