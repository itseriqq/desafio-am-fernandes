'use client';
import React, { useState, useEffect } from "react";
import styles from "./imoveis.module.css";
import axios from 'axios';
import ImovelCard from "../components/ImovelCard/ImovelCard";

export default function ImoveisPage() {
  const [imoveis, setImoveis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    localizacao: '',
    quartos: '',
    vagas: '',
    preco: '',
    bairro: ''
  });

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const res = await axios.get('https://api.estagio.amfernandes.com.br/imoveis');
        setImoveis(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchImoveis();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
    getFilteredImoveis()
  };

  const getFilteredImoveis = () => {
    return imoveis
      .filter(imovel => {
        const localizacaoMatch = !filters.localizacao ||
          (imovel.rua.toLowerCase().includes(filters.localizacao.toLowerCase()) ||
            imovel.bairro.toLowerCase().includes(filters.localizacao.toLowerCase()) ||
            imovel.cidade.toLowerCase().includes(filters.localizacao.toLowerCase()) ||
            imovel.cep.toLowerCase().includes(filters.localizacao.toLowerCase()));

        const quartosMatch = !filters.quartos || imovel.planta.dorms === parseInt(filters.quartos);
        const vagasMatch = !filters.vagas || imovel.planta.vagas === parseInt(filters.vagas);
        const bairroMatch = !filters.bairro || imovel.bairro.toLowerCase().includes(filters.bairro.toLowerCase());

        return localizacaoMatch && quartosMatch && vagasMatch && bairroMatch;
      })
      .sort((a, b) => {
        if (filters.preco === 'ordemMenorPreco') {
          return a.planta.preco - b.planta.preco;
        } else if (filters.preco === 'ordemMaiorPreco') {
          return b.planta.preco - a.planta.preco;
        } else {
          return 0;
        }
      });
  };

  const filteredImoveis = getFilteredImoveis();

  return (
    <>
      <div className={styles.filterBar}>
        <div className={styles.input}>
          <label htmlFor="localizacao">Busque por Localização</label>
          <input
            type="text"
            name="localizacao"
            id="localizacao"
            placeholder="Ex.: São Paulo"
            value={filters.localizacao}
            onChange={handleFilterChange}
          />
        </div>

        <div className={styles.input}>
          <label htmlFor="quartos">Quartos</label>
          <select
            id="quartos"
            name="quartos"
            className={styles.select}
            value={filters.quartos}
            onChange={handleFilterChange}
          >
            <option value="">Todos</option>
            <option value="1">1 quarto</option>
            <option value="2">2 quartos</option>
            <option value="3">3 quartos</option>
            <option value="4">4 quartos</option>
          </select>
        </div>

        <div className={styles.input}>
          <label htmlFor="vagas">Vagas</label>
          <select
            id="vagas"
            name="vagas"
            className={styles.select}
            value={filters.vagas}
            onChange={handleFilterChange}
          >
            <option value="">Todas</option>
            <option value="1">1 vaga</option>
            <option value="2">2 vagas</option>
            <option value="3">3 vagas</option>
            <option value="4">4 vagas</option>
          </select>
        </div>

        <div className={styles.input}>
          <label htmlFor="preco">Preço</label>
          <select
            id="preco"
            name="preco"
            className={styles.select}
            value={filters.preco}
            onChange={handleFilterChange}
          >
            <option value="">Ordenar por preço</option>
            <option value="ordemMenorPreco">Menor preço</option>
            <option value="ordemMaiorPreco">Maior preço</option>
          </select>
        </div>

        <div className={styles.input}>
          <label htmlFor="bairro">Bairro</label>
          <input
            type="text"
            name="bairro"
            id="bairro"
            placeholder="Ex.: Vila Gilda"
            value={filters.bairro}
            onChange={handleFilterChange}
          />
        </div>
      </div>

      <div className={styles.imoveisContainer}>
        {loading ? <p>Carregando os imóveis...</p> : error ? <p>Erro no carregamento</p> : (
          filteredImoveis.map((imovel, index) => (
            <ImovelCard key={index} imovel={imovel} />
          ))
        )}
      </div>
    </>
  );
}
