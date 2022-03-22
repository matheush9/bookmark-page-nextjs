import Head from "next/head";
import React, { useState } from "react";
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
    </div>
  )
}
