import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";
import AllBookings from "../components/All-Bookings/AllBookings";
import ManageTours from "../components/Manage-Tours/ManageTours";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/home" />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/tours" element={<Tours />} />
      <Route exact path="/tours/:id" element={<TourDetails />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/thank-you" element={<ThankYou />} />
      <Route exact path="/tours/search/getToursBySearch" element={<SearchResultList />} />
      <Route exact path="/allBookings" element={<AllBookings />} />
      <Route exact path="/manageTours" element={<ManageTours />} />
    </Routes>
  );
};

export default Router;
