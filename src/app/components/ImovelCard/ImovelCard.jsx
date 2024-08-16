import React from "react";
import BedIcon from "@mui/icons-material/Bed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import styles from "./imovelcard.module.css"

const ImovelCard = ({ imovel }) => (
  <div className={styles.card}>

    {/* inicio tag */}

    <div className={styles.tag}>
      <span>Exclusivo</span>
    </div>
    {/* fim tag */}

    {/* imagem */}
    <div className={styles.img}>
      <Image src="https://firebasestorage.googleapis.com/v0/b/easyhouse-amf.appspot.com/o/taste.png?alt=media" width={500} height={500}></Image>
    </div>
    {/* fim da imagem */}

    {/* inicio descricao */}
    <div className={styles.desc}>
      <span className={styles.categoria}>Apartamento</span>
      <h2 className={styles.preco}>R$ 1.200.000</h2>
      <div className={styles.MetragemDormsVagas}>
        <span>3 quartos</span>
        <span>•</span>
        <span>2 vagas</span>
        <span>•</span>
        <span>
          75 m²
        </span>
      </div>
      <div className={styles.local}>
        Rua Kugler, Vila Gilda - Santo André
      </div>
    </div>
    {/* fim descricao */}
  </div>
);

export default ImovelCard;
