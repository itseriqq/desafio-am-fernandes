'use client'
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from 'axios';
import HeroSectionOne from "./components/HeroSections/HeroSectionOne/HeroSectionOne.jsx";

export default function Home() {

  return (
    <>
      <HeroSectionOne />
    </>
  );
}
