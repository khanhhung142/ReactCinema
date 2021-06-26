import React from "react";
// import Footer from 'src/components/Footer'
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';
export default function AppLayout({children}) {
  return <>
  <Navbar />
    {children}
  <Footer/>
  </>;
}
