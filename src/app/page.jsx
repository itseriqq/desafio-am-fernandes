'use client'
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from 'axios';

export default function Home() {

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
    <div>
      {/* {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>Erro ao carregar imóveis</p>
      ) : (
        <div>
          {imoveis.map((imovel, index) => (
            <div key={index}>
              <h2>{imovel.nome}</h2>
              <p>{imovel.rua}, {imovel.num}, {imovel.bairro}</p>
              <p>{imovel.cidade} - {imovel.cep}</p>
              <p>Preço: R$ {imovel.planta.preco}</p>
              <img src={imovel.fachada} alt={`Fachada do ${imovel.nome}`} />
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}
