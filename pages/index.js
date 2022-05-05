import Head from "next/head";
import Image from "next/image";
import React, { useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nuur1 from "../components/Nuur1";
import Nuur2 from "../components/Nuur2";
import Nuur3 from "../components/Nuur3";
import Nuur4 from "../components/Nuur4";
import Nuur5 from "../components/Nuur5";
import Nuur6 from "../components/Nuur6";
import Nuur7 from "../components/Nuur7";
import Nuur8 from "../components/Nuur8";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() =>{
    AOS.init({ duration: 1000});
  },[]);
  return (
    <>
    <div className="bg-green-50">
      <Nuur1/>
    </div>
    <div data-aos="fade-up" className="bg-warmGray-50">
      <Nuur2/>
    </div>
    <div data-aos="fade-up"  className="bg-warmGray-50">
      <Nuur3/>
    </div>
    <div data-aos="fade-up"  className="bg-warmGray-50">
      <Nuur4/>
    </div>
    <div data-aos="fade-up" data-aos-duration="2000"  className="bg-nuur5_color">
      <Nuur5/>
    </div>
    <div data-aos="fade-up" data-aos-duration="3000"  className="bg-warmGray-50">
      <Nuur6/>
    </div>
    <div data-aos="fade-up" className="bg-green-50 h-screen">
      <Nuur7/>
    </div>
    <div data-aos="fade-up" className="bg-warmGray-50">
      <Nuur8/>
    </div>
    <div className="bg-[#0F102C]">
      <Footer/>
    </div>
    </>
  );
}
