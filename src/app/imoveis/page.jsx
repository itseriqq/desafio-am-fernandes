'use client'
import React, { useState, useEffect } from "react";
import styles from "./imoveis.module.css";
import axios from 'axios';
import ImovelCard from "../components/ImovelCard/ImovelCard";
import { TextField } from "@mui/material";

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
    <>

      <div className={styles.filterBar}>
        <div className={styles.input}>
          <label htmlFor="text">Busque por Localização</label>
          <input type="text" name="localizacao" placeholder="Ex.: São Paulo" />
        </div>


        <div className={styles.input}>
          <label htmlFor="quartos">Quartos</label>
          <select id="quartos" className={styles.select} name="quartos" value={1} >
            <option value="1">1 quarto</option>
            <option value="2">2 quartos</option>
            <option value="3">3 quartos</option>
            <option value="4">4 quartos</option>
          </select>
        </div>

        <div className={styles.input}>
          <label htmlFor="vagas">Vagas</label>
          <select id="vagas" className={styles.select} name="vagas" value={1} >
            <option value="1">1 quarto</option>
            <option value="2">2 vagas</option>
            <option value="3">3 vagas</option>
            <option value="4">4 vagas</option>
          </select>
        </div>

        <div className={styles.input}>
          <label htmlFor="ordenacao">Preço</label>
          <select className={styles.select} id="ordenacao" name="ordenacao" >
            <option value="ordemMaiorPreco">Maior preço</option>
            <option value="ordemMenorPreco">Menor preço</option>
          </select>
        </div>

        <div className={styles.input}>
          <label htmlFor="ordenacao">Bairro</label>
          <select className={styles.select} id="ordenacao" name="ordenacao" >
            <option value="ordemMaiorPreco">Maior preço</option>
            <option value="ordemMenorPreco">Menor preço</option>
          </select>
        </div>

      </div>

      <div className="container">
        <ImovelCard></ImovelCard>
      </div>
    </>
  );
}
