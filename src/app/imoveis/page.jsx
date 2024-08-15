'use client'
import React, { useState, useMemo, useEffect } from "react";
import styles from "./imoveis.module.css";
import axios from 'axios';
import ImovelCard from "../components/ImovelCard/ImovelCard";

export default function ImoveisPage() {

  const [imoveis, setImoveis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchImoveis = async () => {
      try {
        const res = await axios.get(`https://api.estagio.amfernandes.com.br/imoveis`);
        setImoveis(res.data);
        console.log(res);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    FetchImoveis();
  }, []);

  return (
    <ImovelCard></ImovelCard>
  );
}
