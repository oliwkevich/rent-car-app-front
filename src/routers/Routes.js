import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Blog } from "../pages/Blog";
import { BlogDetails } from "../pages/BlogDetails";
import { CarDetails } from "../pages/CarDetails";
import { CarListing } from "../pages/CarListing";
import { NotFound } from "../pages/NotFound";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
