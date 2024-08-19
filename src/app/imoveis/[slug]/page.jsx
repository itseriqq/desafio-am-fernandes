'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./imovel.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useParams, useRouter } from 'next/navigation';

const ImovelPage = () => {
    const [currentImg, setCurrentImg] = useState(0);
    const [imovel, setImovel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { slug } = useParams(); 

    useEffect(() => {
        const fetchImoveis = async () => {
            if (!slug) return;

            try {
                const res = await axios.get('https://api.estagio.amfernandes.com.br/imoveis');
                const imoveis = res.data;

                let targetImovel = null;
                for (const imovel of imoveis) {
                    const latAbs = Math.abs(imovel.location._lat).toString().replace('.', '');
                    const longAbs = Math.abs(imovel.location._long).toString().replace('.', '');
                    const imovelSlug = latAbs > longAbs ? `${latAbs}${longAbs}` : `${longAbs}${latAbs}`;

                    if (imovelSlug === slug) {
                        targetImovel = imovel;
                        break;
                    }
                }

                setImovel(targetImovel);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchImoveis();
    }, [slug]);

    const handleImageChangeBackward = () => {
        setCurrentImg(prevImg => (prevImg - 1 + DATA.length) % DATA.length);
    };

    const handleImageChangeForward = () => {
        setCurrentImg(prevImg => (prevImg + 1) % DATA.length);
    };

    if (loading) return <p style={{marginTop: '40px', marginBottom: '40px'}}>Carregando...</p>;
    if (error) return <p>Erro ao carregar os imóveis: {error.message}</p>;
    if (!imovel) return <p>Não foi encontrado nenhum imóvel.</p>; 

    const DATA = [
        { image: imovel.fachada },
        { image: 'https://firebasestorage.googleapis.com/v0/b/easyhouse-amf.appspot.com/o/sajardimilhamykonos.jpg?alt=media' },
        { image: 'https://firebasestorage.googleapis.com/v0/b/easyhouse-amf.appspot.com/o/sajardimjarina.jpg?alt=media' },
    ];

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.inicial}`}>
                <div className={`${styles.header}`}>
                    <h1>{imovel.nome} com {imovel.planta.dorms} quartos, {imovel.planta.metragem} m² {imovel.planta.vagas !== null && (
                            <>
                                e {imovel.planta.vagas} vagas
                            </>
                        )}</h1>

                    <div className={styles.headerLegenda}>
                        <div className={styles.tag}>Exclusivo</div>
                        <div className={styles.tag}>Novo</div>
                        <h3 className={styles.headerLegendaTotal}>Total R$ {imovel.planta.preco.toLocaleString()}</h3>
                        <h3 className={styles.headerLegendaFinanciamento}>Aceita financiamento</h3>

                        <div className={styles.divBotao}>
                            <button className={styles.botao}>Agendar visita</button>
                            <button className={styles.botao}>Negociar</button>
                        </div>
                    </div>
                </div>

                <div className={`${styles.imagem}`}>
                    <div className={styles.botoes}>
                        <div className={styles.botaoEsq} onClick={handleImageChangeBackward}>
                            <ArrowBackIcon />
                        </div>
                        <div className={styles.botaoDir} onClick={handleImageChangeForward}>
                            <ArrowForwardIcon />
                        </div>
                    </div>
                    <img src={DATA[currentImg].image} alt="Imagem do imóvel" />
                </div>
                
            </div>
        </div>
    );
};

export default ImovelPage;
