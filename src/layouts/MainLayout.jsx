import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-[#F2EAD3] ">
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <main className="min-h-[calc(100vh-137px)] my-auto">
          <Outlet></Outlet>
        </main>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
