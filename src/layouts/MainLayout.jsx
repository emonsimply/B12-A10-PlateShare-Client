import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <nav className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="min-h-[calc(100vh-65px)] my-auto">
          <Outlet></Outlet>
        </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
