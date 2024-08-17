import React from 'react'
import styles from "./auth.module.css"
import GlobalStyles from "@/app/globals.css"
import Link from 'next/link'

const AuthPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Bem vindo de volta!</h1>
                    <span>Entre ou crie sua conta.</span>
                </div>

                {/* inicio card auth */}

                <div className={styles.cardAuth}>

                    {/* inicio campos de input */}

                    <div className={styles.campos}>
                        <div className={styles.forgotPassword}>
                            <Link href="/" className="link">Esqueceu sua senha?</Link>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="amfernandes@hotmail.com"
                            />
                        </div>

                        <div className={styles.input}>
                            <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                name="senha"
                                id="senha"
                                placeholder="Sua senha"
                            />
                        </div>
                    </div>

                    {/* fim campos de input */}

                    {/* inicio botao de acesso */}
                    <div className={styles.divBotao}>
                        <button className={`${styles.botao}`}>Login</button>
                    </div>
                    {/* fim botao de acesso */}

                </div>

                {/* fim card auth */}

                <div className={styles.cadastro}>
                    <span>Não tem uma conta?</span>
                    <Link href="/" className={styles.createAccount}>Cadastre-se</Link>
                </div>
            </div>
        </>
    )
}

export default AuthPage