import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='layout'>
            <div className='header'><Header /></div>
            <div className='main-content'><Outlet /></div>
            <div className='footer'><Footer /></div>

        </div>
    );
};

export default MainLayout;
