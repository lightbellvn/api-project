import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import './Menu.css' 

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true,
    },
    {
        name: 'Product Manager',
        to: '/product-list',
        exact: false,
    },
]
const MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let active = match ? 'active' : '';
                return (
                    <li className={`nav-item ${active}`} >
                        <Link
                            to={to}
                            className='nav-link'
                        >{lable}</Link>
                    </li>
                )
            }}
        />
    )
}

class Menu extends Component {

    showMenus = (menus) => {
        let result = '';
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        to={menu.to}
                        lable={menu.name}
                        activeOnlyWhenExact={menu.exact}
                    />

                )
            })
        }
        return result;
    }
    render() {
        return (
            <div className=''>
                <nav className="navbar navbar-expand navbar-light bg-beauty">
                    <Link className='navbar-brand text-danger bg-light px-2 py-2 border-x' to='/' >CALL API</Link>
                    <ul className="nav navbar-nav">
                        {this.showMenus(menus)}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Menu;