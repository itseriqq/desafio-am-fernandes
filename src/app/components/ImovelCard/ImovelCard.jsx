import React from "react";
import Image from "next/image";
import styles from "./imovelcard.module.css";
import GlobalStyles from "@/app/globals.css";
import Link from "next/link";

// example of how we could build an unique id for each building
// actually, the use of this function is not thaaaat optimized as we would need to
// get through the whole building's array, using this method, to find which
// building should be displayed. It takes lots of performance away.
// anyway, i'd like to show it as an idea and implement it 

function generateImovelSlug(latitude, longitude) {
  const latAbs = Math.abs(latitude).toString().replace('.', '');
  const longAbs = Math.abs(longitude).toString().replace('.', '');

  if (latAbs > longAbs) {
    return `${latAbs}${longAbs}`;
  } else {
    return `${longAbs}${latAbs}`;
  }
}

const ImovelCard = ({ imovel }) => {

  const slug = generateImovelSlug(imovel.location._lat, imovel.location._long);

  return (
    <Link href={`/imoveis/${slug}`} className={`link ${styles.card}`}>
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
};

export default ImovelCard;
