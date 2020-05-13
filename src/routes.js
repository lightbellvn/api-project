import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ActionPage from './pages/ActionPage/ActionPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: ()=><HomePage />
    },
    
    {
        path: '/product-list',
        exact: false,
        main: ()=><ProductListPage />
    },
    {
        path: '/add-product',
        exact: false,
        main: ()=><ActionPage />
    },
    {
        path: '/:id/edit',
        exact: false,
        main: ()=><ActionPage />
    },
    {
        path: '',
        exact: false,
        main: ()=><NotFoundPage />
    },
]

export default routes;