import React, { Component } from 'react'

export default class ActionPage extends Component {
    render() {
        return (
            <div className="container text-light col-sm-5 bg-warning">
                <div className='card bg-danger h2 text-center' >ADD NEW PRODUCT</div>

                <form action="/action_page.php" className="">
                    <div className="form-group">
                        <label htmlFor="id">Product's id:</label>
                        <input type="text" className="form-control" id="id" placeholder="Enter id" name="id" required />

                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Product's name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Product's price:</label>
                        <input type="text" className="form-control" id="price" placeholder="Enter price" name="price" required />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" name="remember" required /> Available
  </label>
                    </div>
                    <button type="submit" className="btn btn-outline-danger mb-1">Submit</button>
                </form>
            </div>

        )
    }
}
