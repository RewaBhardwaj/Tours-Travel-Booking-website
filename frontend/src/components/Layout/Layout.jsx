import React from 'react'
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Routers from '../../router/Routers';

const Layout = () => {
    return <>
        <Header />
        <Routers />
        {
            window.location.pathname !== '/admin'
            &&
            <Footer />
        }
    </>
}

export default Layout
