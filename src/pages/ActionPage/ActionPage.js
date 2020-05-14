import React, { Component } from "react";
import callApi from "./../../utils/apiCaller";

export default class ActionPage extends Component {
   constructor(props) {
      super(props);
      this.state = {

         name: "",
         price: "",
         status: true,
      };
   }
   onSave = (e) => {
      e.preventDefault()
      let { name, price, status } = this.state;
      callApi('products', 'POST', {
         name,
         price,
         status
      })
   };

   onChange = (e) => {
      let target = e.target;
      let name = target.name;
      let value = target.type === 'checkbox' ? target.checked : target.value;

      this.setState({
         [name]: value,
      })
   };

   render() {
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

                  />
               </div>
               <div className="form-group form-check">
                  <label className="form-check-label">
                     <input
                        className="form-check-input"
                        defaultChecked
                        type="checkbox"
                        name="status"
                        onChange={this.onChange}

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
