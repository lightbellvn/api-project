

import React, { Component } from 'react'

import Menu from './components/menu/Menu';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

class App extends Component {
   showContentMenu = x => {
    let result = '';
    if (routes.length > 0) {
      result = x.map((route, index) => {
        return (<Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
       />)
      })
    }
    return <Switch>{result}</Switch>
  }
  render() {
    

    return (
      <Router>
        <div className="bg-secondary">
          <Menu />

          <div className='container' >
            <div className="row">
             
              {this.showContentMenu(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}





export default App;
