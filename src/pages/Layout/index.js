import React from 'react'
import { Outlet } from "react-router-dom";
import "./index.scss";
import Header from '../../components/Header';

const Layout = () => {
  return (
    <>
    <Header />
      <Outlet />
  </>
  )
}

export default Layout