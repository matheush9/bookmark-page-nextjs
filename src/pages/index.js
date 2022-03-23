import Head from "next/head";
import React, { useState } from "react";
import Contact from "../components/Contact";
import Extension from "../components/Extension";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Topbar from "../components/Topbar";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>Bookmark page</Head>
      <Topbar />
      <Hero />
      <Features />
      <Extension />
      <Faq />
      <Contact />
    </div>
  )
}
