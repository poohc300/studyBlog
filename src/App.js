import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import BlogList from './pages/Blog/BlogList';
import BlogPost from './pages/Blog/BlogPost';
import MainLayout from './layouts/MainLayout';

const App = () => {
    const posts = [
        { id: 1, title: 'First Post', content: 'This is the first post content' },
        { id: 2, title: 'Second Post', content: 'This is the second post content' }
    ];

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} path='home' />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="blog" element={<BlogList posts={posts} />} />
                    <Route path="blog/:id" element={<BlogPost posts={posts} />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default App;
