import React, { Component } from "react";
import callApi from "./../../utils/apiCaller";

export default class ActionPage extends Component {
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
      
      
      callApi(`products/${id}`, "GET", null).then(res => {
         let data = res.data
         console.log(data);
         
        this.setState({
          id: data.id,
          name: data.name,
          price:data.price,
          status: data.status,
        });
      });
    }
  }
  onSave = (e) => {
    e.preventDefault();
    let { id, name, price, status } = this.state;
    let data = { name, price, status };
    if (id) {
       callApi(`products/${id}`, "PUT", data).then((res) => {
         this.props.history.goBack();
       });
       
    }else{

       callApi("products", "POST", data).then((res) => {
         this.props.history.goBack();
       });
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
