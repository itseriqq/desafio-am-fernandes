import Link from "next/link";
import { Container, Typography, Grid, IconButton, Box } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./footer.module.css";
import GlobalStyles from "@/app/globals.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} lg={3}>
                        <Box className={styles.info}>
                            <Link href='/'>
                                <img src="/logo.png" width="200" height="60" className="d-inline-block align-top" alt="Logo" />
                            </Link>
                            <Typography className={styles.infoText}>
                                <strong>Endereço:</strong> WeWork - Av. Pereira Barreto, 1479 - Baeta Neves, São Bernardo do Campo
                            </Typography>
                            <Typography className={styles.infoText}>
                                <strong>Telefone:</strong> (11) 98306-4040
                            </Typography>
                            <Typography className={styles.infoText}>
                                <strong>Email:</strong> amfernandes@email.com
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} marginTop={3}>
                        <h6>Navegue</h6>
                        <Box className={styles.nav}>
                            <Link href="/contato" className={`${styles.infoText} ${styles.navLink}`}>
                                Sobre
                            </Link>
                            <Link href="/imoveis" className={`${styles.infoText} ${styles.navLink}`}>
                                Empreendimentos
                            </Link>
                            <Link href="/contato" className={`${styles.infoText} ${styles.navLink}`}>
                                Contato
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} marginTop={3}>
                        <h6>Serviços</h6>
                        <Box className={styles.nav}>
                            <Link href="/imoveis" className={`${styles.infoText} ${styles.navLink}`}>
                                Incorporação
                            </Link>
                            <Link href="/imoveis" className={`${styles.infoText} ${styles.navLink}`}>
                                Construção
                            </Link>
                            <Link href="/imoveis" className={`${styles.infoText} ${styles.navLink}`}>
                                Vendas
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3} marginTop={3}>
                        <h6>Siga-nos</h6>
                        <Box className={styles.social}>
                            <IconButton href="https://www.facebook.com/amfernandesincorporadora/" className={styles.socialIcon}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton href="https://www.instagram.com/amfernandesinc/" className={styles.socialIcon}>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton href="https://github.com/am-fernandes" className={styles.socialIcon}>
                                <GitHubIcon />
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/company/am-fernandes" className={styles.socialIcon}>
                                <LinkedInIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Box className={styles.footerBottom}>
                    <Typography className={styles.copyRight}>
                        &copy; 2024 AM Fernandes. Todos os direitos reservados.
                    </Typography>
                    <Box className={styles.footerLinks}>
                        <Link target="_blank" href="https://br.linkedin.com/in/oerickaugusto" className={styles.footerLink}>
                            Política de Privacidade
                        </Link>
                        <Link target="_blank" href="https://br.linkedin.com/in/oerickaugusto" className={styles.footerLink}>
                            Termos de Uso
                        </Link>
                    </Box>
                </Box>
            </Container>
        </footer>
    );
}
