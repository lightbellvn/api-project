import "./App.css";
import React, { Component } from "react";
import Menu from "./components/menu/Menu";
import ProductList from "./components/productList/ProductList";
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  showContentMenu = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }

    return <Switch>{result}</Switch>;
  };
  render() {
    return (
      <Router>
        <div className="container-fluid bg-secondary">
          <Menu />
          <div className="container py-5">
            
          {/* <h2 className="text-center card bg-primary">Product List</h2>

          <ProductList /> */}
            
          {this.showContentMenu(routes)}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
