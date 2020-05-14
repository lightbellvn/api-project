import React, { Component } from "react";
import ProductList from "../../components/productList/ProductList";
import ProductItem from "../../components/productItem/ProductItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import callApi from "./../../utils/apiCaller";

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    callApi("products", "GET", null).then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  onDelete = (id) => {
    let products = this.state.products;
    callApi(`products/${id}`, "DELETE", null).then((res) => {
      if (res.status === 200) {
        let index = this.findIndex(products, id);
        if (index !== -1) {
          products.splice(index, 1);
        }
        this.setState({
          products,
        });
      }
    });
  };

  findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  };

  render() {
    let { products } = this.state;

    let showProduct = (products) => {
      let result = null;
      if (products.length > 0) {
        result = products.map((product, index) => {
          return (
            <ProductItem
              key={index}
              product={product}
              index={index}
              onDelete={this.onDelete}
            />
          );
        });
      }
      return result;
    };

    return (
      <div>
        <div className="col-sm-12">
          <Link className="btn btn-outline-light my-1" to="/add-product">
            Add Product
          </Link>
          <ProductList>{showProduct(products)}</ProductList>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // products: state.products
  };
};
export default connect(mapStateToProps, null)(ProductListPage);
