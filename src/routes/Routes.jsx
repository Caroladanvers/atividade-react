import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import NotFound from '../Pages/NotFound';
import Login from '../Pages/Login'; 
import PageLayout from '../layouts/PageLayout';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} /> 
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;