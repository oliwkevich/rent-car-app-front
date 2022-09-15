import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainRoutes } from "../../routers/Routes";

export const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <MainRoutes />
      </div>
      <Footer />
    </>
  );
};
