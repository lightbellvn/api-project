import React, { Component } from "react";
import callApi from "./../../utils/apiCaller";
import * as actions from './../../redux/actions'
import { connect } from "react-redux";

 class ActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      status: true,
    };
  }
  componentDidMount() {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
      console.log(id);
      
      this.props.editProduct(id)
      
    }
  }
  onSave = (e) => {
    e.preventDefault();
    let { id, name, price, status } = this.state;
    let data = { name, price, status };
    let product = {id, name, price, status };
    if (id) {
       callApi(`products/${id}`, "PUT", data).then((res) => {
      });
      
    }else{
      
      this.props.addProduct(product)
      this.props.history.goBack();
    }
  };

  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
     let {name, price, status} = this.state;
    return (
      <div className="container text-light col-sm-5 bg-warning">
        <div className="card bg-danger h2 text-center">ADD NEW PRODUCT</div>

        <form onSubmit={this.onSave} className="">
          <div className="form-group">
            <label htmlFor="name">Product's name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Product's price:</label>
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="Enter price"
              name="price"
              onChange={this.onChange}
              value= {price}
            />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                
                type="checkbox"
                name="status"
                onChange={this.onChange}
                checked = {status}
              />{" "}
              Available
            </label>
          </div>
          <button type="submit" className="btn btn-outline-danger mb-1">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch,props)=> {
  return {
    addProduct : product => {
      dispatch(actions.addProductRequest(product))
    },
    editProduct : id => {
      dispatch(actions.getProductToEditRequest(id))
    },
  
  }
}

export default connect(null,mapDispatchToProps) (ActionPage);
