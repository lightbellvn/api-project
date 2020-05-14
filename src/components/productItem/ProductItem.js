import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductItem extends Component {
  onDelete = (product) => {
    if (confirm(`Do you want to delete ${product.name}?`)) { //eslint-disable-line
      this.props.onDelete(product.id)
      
    }
  };
  render() {
    let { index, product } = this.props;
    let statusName = product.status ? "available" : "out of stock";
    return (
      <tbody className="text-light">
        <tr>
          <td>{index + 1}</td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <div className=" btn btn-outline-light text-center">
              {statusName}
            </div>
          </td>
          <td>
            <Link to={`product/${product.id}/edit`} className="btn btn-outline-light mr-2 ">
              EDIT
            </Link>
            <button
              type="button"
              className="btn btn-outline-light "
              onClick={()=>{this.onDelete(product)}}
            >
              DELETE
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}
