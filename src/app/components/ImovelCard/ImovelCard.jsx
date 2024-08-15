import React from "react";
import BedIcon from "@mui/icons-material/Bed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import styles from "./imovelcard.module.css"

const ImovelCard = ({ imovel }) => (
  <div className={styles.card}>
    {/* imagem */}
    <div className={styles.img}>
      <Image src="https://firebasestorage.googleapis.com/v0/b/easyhouse-amf.appspot.com/o/taste.png?alt=media" width={500} height={500}></Image>
    </div>
    {/* fim da imagem */}

    <div className={styles.desc}>
      <span className={styles.categoria}>Apartamento</span>
      <h2 className={styles.preco}>R$ 1.200.000</h2>
      <div className={styles.metragemDorms}>
        <p>
          <BedIcon />
          3 dormitórios
        </p>
        <p>
          75m²
        </p>
      </div>
      <p>
        <LocationOnIcon />
        Santo André, 124
      </p>
    </div>
  </div>
);

export default ImovelCard;
