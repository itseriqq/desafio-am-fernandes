import React from 'react'
import styles from "./aboutthecompany.module.css"

import Link from 'next/link';
import Image from 'next/image';


const AboutTheCompany = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>Sobre nós</h1>
                    <span style={{ marginTop: '-10px' }}>Acreditamos que o diálogo é a ferramenta mais poderosa.</span>
                </div>

                <div className={styles.texto}>
                    <span>A compra de um imóvel é uma das decisões mais importantes da vida e deve ser tratada com respeito,
                        honestidade e cuidado. Por isso, dedicamos o nosso conhecimento para proporcionar sua satisfação,
                        trazendo conforto e qualidade de vida.
                        <br />
                        <br />
                        Acreditamos que o diálogo transparente e comprometido entre cliente e equipe é a ferramenta mais poderosa
                        nesse processo. Somos a incorporadora que escolhe estar com você desde o primeiro momento
                        da sua decisão de nova casa, até a entrega das chaves.
                        Nosso maior talento é transformar a sua experiência em única, agradável e descomplicada.</span>
                </div>


                <div className={styles.divBotao}>
                    <Link href="/contato" className={`link ${styles.botao}`}>Entre em contato</Link>
                </div>
            </div>
            <div className={styles.about}>
                <div className={styles.imagem}>
                    <Image fill src="/about-img.avif" alt="family" />
                </div>
            </div>
        </div>
    )
}

export default AboutTheCompany