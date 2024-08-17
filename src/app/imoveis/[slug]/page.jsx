'use client'

import React, { useState } from 'react'
import styles from "./imovel.module.css"
import Image from 'next/image'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ImovelPage = () => {
    const [currentImg, setCurrentImg] = useState(0);

    const DATA = [
        { image: 'https://firebasestorage.googleapis.com/v0/b/easyhouse-amf.appspot.com/o/taste.png?alt=media' },
        { image: 'https://firebasestorage.googleapis.com/v0/b/easyhouse-amf.appspot.com/o/sajardimilhamykonos.jpg?alt=media' },
        { image: 'https://firebasestorage.googleapis.com/v0/b/easyhouse-amf.appspot.com/o/sajardimjarina.jpg?alt=media' },
    ];

    const handleImageChangeBackward = () => {
        setCurrentImg(prevImg => (prevImg - 1 + DATA.length) % DATA.length);
    }

    const handleImageChangeForward = () => {
        setCurrentImg(prevImg => (prevImg + 1) % DATA.length);
    }

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.inicial}`}>
                <div className={`${styles.header}`}>
                    <h1>Apartamento para comprar com 70m², 2 quartos e 1 vaga</h1>

                    <div className={styles.headerLegenda}>
                        <div className={styles.tag}>Exclusivo</div>
                        <div className={styles.tag}>Novo</div>
                        <h3 className={styles.headerLegendaTotal}>Total R$ 254.000</h3>
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
    )
}

export default ImovelPage;
