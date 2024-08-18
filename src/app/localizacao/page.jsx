import React from 'react'
import styles from "./localizacao.module.css"
import GlobalStyles from "@/app/globals.css"

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Link from 'next/link';

const LocalizacaoPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>Nossa localização</h1>
                    <span style={{ marginTop: '-10px' }}>Bem localizados para te atender.</span>
                </div>

                <div className={styles.infoLocal}>
                    <div className={styles.item}>
                        <LocationOnOutlinedIcon />
                        <span>Av. Pereira Barreto, 1479 - Baeta Neves, São Bernardo do Campo</span>
                    </div>
                    <div className={styles.item}>
                        <MapOutlinedIcon />
                        <span>09751-000</span>
                    </div>
                    <div className={styles.item}>
                        <LocalPhoneOutlinedIcon />
                        <span>(11) 98306-4040</span>
                    </div>
                    <div className={styles.item}>
                        <EmailOutlinedIcon />
                        <span>amfernandes@email.com</span>
                    </div>
                </div>

                <div className={styles.divBotao}>
                    <Link href="https://maps.app.goo.gl/Wk8ZKNSZxdJBoxR39" className={`link ${styles.botao}`}>Ver no mapa</Link>
                </div>
            </div>
            <div className={styles.mapa}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.75048361837!2d-46.550473324665965!3d-23.684879478715086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c962772e8e5%3A0x9b6a1425f8c9498a!2sAMFernandes%20Incorporadora!5e0!3m2!1spt-BR!2sbr!4v1723989408958!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    style={{ border: '0px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default LocalizacaoPage