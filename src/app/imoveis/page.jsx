'use client';
import React, { useState, useEffect } from "react";
import styles from "./imoveis.module.css";
import axios from 'axios';
import ImovelCard from "../components/ImovelCard/ImovelCard";
import Pagination from '@mui/material/Pagination';

export default function ImoveisPage() {
  const [imoveis, setImoveis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    localizacao: '',
    quartos: '',
    vagas: '',
    preco: '',
    ordenacao: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

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
    setCurrentPage(1); // resets to page 1 every time filters change
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

        return localizacaoMatch && quartosMatch && vagasMatch;
      })
      .sort((a, b) => {
        if (filters.preco === 'ordemMenorPreco') {
          return a.planta.preco - b.planta.preco;
        } else if (filters.preco === 'ordemMaiorPreco') {
          return b.planta.preco - a.planta.preco;
        } else if (filters.ordenacao === 'bairroAlfabetica') {
          return a.bairro.localeCompare(b.bairro);
        } else if (filters.ordenacao === 'ruaAlfabetica') {
          return a.rua.localeCompare(b.rua);
        } else {
          return 0;
        }
      });
  };

  const filteredImoveis = getFilteredImoveis();

  const paginatedImoveis = filteredImoveis.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(filteredImoveis.length / itemsPerPage); // gets value and rounds up, i.e n=3.125 to n=4

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
          <label htmlFor="ordenacao">Ordenar por</label>
          <select
            id="ordenacao"
            name="ordenacao"
            className={styles.select}
            value={filters.ordenacao}
            onChange={handleFilterChange}
          >
            <option value="">Selecione</option>
            <option value="bairroAlfabetica">Bairro (Ordem Alfabética)</option>
            <option value="ruaAlfabetica">Rua (Ordem Alfabética)</option>
          </select>
        </div>
      </div>

      {loading ? (
        ' '
      ) : (
        <div className={styles.paginationContainer}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)}
            color="primary"
            shape="rounded"
          />
        </div>
      )}

      <div className={styles.imoveisContainer}>
        {loading ? <p style={{marginTop: '40px'}}>Aguarde. Carregando os imóveis...</p> : error ? <p style={{marginTop: '40px'}}>Erro no carregamento</p> : paginatedImoveis.length === 0 ? (
          <div className={styles.noResults}>
            <span>Não foram encontrados resultados para sua busca</span>
          </div>
        ) : (
          paginatedImoveis.map((imovel, index) => (
            <ImovelCard key={index} imovel={imovel} />
          ))
        )}
      </div>

      {loading ? (
        ' '
      ) : (
        <div className={styles.paginationContainer} style={{marginBottom: '40px'}}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)}
            color="primary"
            shape="rounded"
          />
        </div>
      )}
    </>
  );
}
