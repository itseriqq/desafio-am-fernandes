'use client'
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from 'axios';
import HeroSection from "./components/CustomizedSections/HeroSection/HeroSection.jsx";
import AboutTheCompany from "./components/CustomizedSections/AboutTheCompany/AboutTheCompany.jsx";

export default function Home() {

  return (
    <>
      <div className={styles.corpo}>
        <HeroSection />
        <AboutTheCompany></AboutTheCompany>
      </div>
    </>
  );
}
