import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import { Brand, CTA, Navbar } from './components';
import { Blog, Features, Footer, Header, WhatKKS } from './containers';
import './index.css';

ReactDOM.render(
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/whatiskks" element={<WhatKKS />} />
            <Route path="/features" element={<Features />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cta" element={<CTA />} />
        </Routes>
        <Footer />
    </Router>
, document.getElementById('root'));
