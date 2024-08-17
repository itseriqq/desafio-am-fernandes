'use client'
import React, { useState } from 'react';
import GlobalStyles from '@/app/globals.css';
import styles from './navbar.module.css';
import Link from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="navbar">
            <div className="" href="#">
                <Link href='#'>
                    <img src="/logo.png" width="200" height="60" className="d-inline-block align-top" alt="Logo" />
                </Link>
            </div>
            {/* inicio itens padrao */}
            <div className={styles.navItens} id="">
                <Link href='/' className={`${styles.linkNav} ${styles.dNoneLg}`}>Início</Link>
                <Link href='/imoveis' className={`${styles.linkNav} ${styles.dNoneLg}`}>Imóveis</Link>
                <Link href='/contato' className={`${styles.linkNav} ${styles.dNoneLg}`}>Contato</Link>
                <Link href='#' className={`${styles.linkNav} ${styles.dNoneLg}`}>Localização</Link>
            </div>
            <Link href='/auth' className={`botaoLink ${styles.dNoneLg}`}>Entrar</Link>

            {/* fim itens padrao */}

            {/* inicio itens sm-devices */}
    
            <div className={styles.navItensSm} id="">
                <Link href='#' className={`${styles.linkNav} ${styles.dNoneSm} ${open ? '' : styles.dNone}`}>Início</Link>
                <Link href='#' className={`${styles.linkNav} ${styles.dNoneSm} ${open ? '' : styles.dNone}`}>Imóveis</Link>
                <Link href='#' className={`${styles.linkNav} ${styles.dNoneSm} ${open ? '' : styles.dNone}`}>Contato</Link>
                <Link href='#' className={`${styles.linkNav} ${styles.dNoneSm} ${open ? '' : styles.dNone}`}>Localização</Link>
            <button className={`botaogeral ${open ? '' : styles.dNone}`} type="button">Entrar</button>
            </div>

            {/* fim itens sm-devices */}

            <button className={`${styles.toggler} botaogeral`} onClick={handleOpen}><MenuIcon></MenuIcon></button>
        </div>
    );
}

export default Navbar;
