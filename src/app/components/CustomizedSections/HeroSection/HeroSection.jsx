import Image from 'next/image'
import React from 'react'
import styles from "./herosectionone.module.css"
import GlobalsStyles from "@/app/globals.css"
import Link from 'next/link'

const HeroSection = () => {
    return (
        <div className={`container-fluid ${styles.container}`}>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-12">
                    <div className={styles.txt}>
                        <h1>Construa o seu lar.</h1>
                        <h3 style={{marginTop: '-15px'}}>Criamos planos junto com você.</h3>
                    </div>
                    <div className={`${styles.botoes}`}>
                        {/* <button className={`${styles.botao}`}>Conhecer</button> */} 
                        <Link className={`botaoLink`} href='/imoveis'>Imóveis</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection