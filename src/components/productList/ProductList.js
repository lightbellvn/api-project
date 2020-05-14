import React, { Component } from 'react'


export default class ProductList extends Component {
    render() {
        return (
            <div className="container">
                <h2 className='text-warning'>Table<span className='text-light'>Products</span>Manager</h2>
                <p>The .thead-dark class adds a black background to table headers, and the .thead-light class adds a grey background to table headers:</p>
                <table className="table table-hover text-center">
                    <thead className="thead-light">
                        <tr>
                            <th>S No.</th>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>STATUS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    {this.props.children}
                </table>
            </div>
        )
    }
}
