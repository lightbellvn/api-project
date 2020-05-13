import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {index, product} = this.props;
        let statusName = product.status ? 'available' : 'out of stock';
        return (
                <tbody className='text-light' >
                  <tr>
        <td>{index +1}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                      <div className=' btn btn-outline-light text-center' >{statusName}</div>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-light mr-2 ">EDIT</button>
                      <button type="button" className="btn btn-outline-light ">DELETE</button>
                    </td>
                  </tr>
                </tbody>
        )
    }
}
