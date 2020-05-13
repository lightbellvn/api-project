import React, { Component } from 'react'
import ProductList from '../../components/productList/ProductList'
import ProductItem from '../../components/productItem/ProductItem'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


 class ProductListPage extends Component {
    render() {
        let {products} = this.props;

        let showProduct = products => {
            let result = '';
            if (products.length > 0) {
                result = products.map((product, index) => {
                    return <ProductItem
                        key={index}
                        product={product}
                        index={index}
                    />
                })
            }
            return result;
        }


        return (
            <div>
                <div className='col-sm-12' >
                    <button type="button" className="btn btn-outline-light my-1" ><Link to='/add-product' >Add Product</Link></button>
                    <ProductList>
                        {showProduct(products)}
                    </ProductList>

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps,null)(ProductListPage)
