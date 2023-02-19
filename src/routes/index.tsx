import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../layouts/App';
import Blog from '../layouts/Blog';

const AllRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

export default AllRoutes;
