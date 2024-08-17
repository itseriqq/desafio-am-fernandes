import React from "react";
import Image from "next/image";
import styles from "./imovelcard.module.css";
import GlobalStyles from "@/app/globals.css"
import Link from "next/link";

const ImovelCard = ({ imovel }) => (
  <Link href="/imoveis/1" className={`link ${styles.card}`}>
    {/* início tag */}
    <div className={styles.tag}>
      <span>Exclusivo</span>
    </div>
    {/* fim tag */}

    {/* imagem */}
    <div className={styles.img}>
      <Image src={imovel.fachada} width={500} height={300} alt={imovel.nome} />
    </div>
    {/* fim da imagem */}

    {/* início descricao */}
    <div className={styles.desc}>
      <span className={styles.categoria}>Apartamento</span>
      <h2 className={styles.preco}>R$ {imovel.planta.preco.toLocaleString()}</h2>
      <div className={styles.MetragemDormsVagas}>
        <span>{imovel.planta.dorms} quartos</span>
        {imovel.planta.vagas !== null && (
          <>
            <span>•</span>
            <span>{imovel.planta.vagas} vagas</span>
          </>
        )}
        <span>•</span>
        <span>{imovel.planta.metragem} m²</span>
      </div>
      <div className={styles.local}>
        {imovel.rua}, {imovel.bairro} - {imovel.cidade}
      </div>
    </div>
    {/* fim descricao */}
  </Link>
);

export default ImovelCard;
