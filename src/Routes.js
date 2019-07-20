import React from 'react'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import StocksComponent from './Containers/StocksComponent/StocksComponent';

const Routes = (
                <Router>
                    <div>
                        <Route path="/" component={App} />
                        <Route path="/stocks" component={StocksComponent} />
                    </div>
                </Router>
            );

export default Routes;