import Image from 'next/image'
import React from 'react'
import styles from "./herosectionone.module.css"

const HeroSectionOne = () => {
    return (
        <div className={`container ${styles.containerOne}`}>
            <div className="row">
                <div className="col-6">
                    <div className={styles.txt}>
                        <h1>Encontre os melhores lugares para morar.</h1>
                        <h3>Tudo que você procura está aqui!</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSectionOne