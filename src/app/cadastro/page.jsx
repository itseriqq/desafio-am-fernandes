'use client'
import React, { useState } from 'react'
import styles from "./cadastro.module.css"
import GlobalStyles from "@/app/globals.css"
import Link from 'next/link'

const CadastroPage = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [erroNome, setErroNome] = useState('');
    const [erroCpf, setErroCpf] = useState('');
    const [erroTelefone, setErroTelefone] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const [erroSenha, setErroSenha] = useState('');
    const [erroConfirmEmail, setErroConfirmEmail] = useState('');
    const [erroConfirmSenha, setErroConfirmSenha] = useState('');
    const [erroDataNascimento, setErroDataNascimento] = useState('');

    const handleNomeChange = (value) => {
        const formattedValue = value.replace(/[^a-zA-Z\s]/g, '').replace(/\b\w/g, char => char.toUpperCase());
        setNome(formattedValue);
    }

    const handleCpfChange = (value) => {
        const formattedValue = value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        setCpf(formattedValue);
    }

    const handleTelefoneChange = (value) => {
        const formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        setTelefone(formattedValue);
    }

    const handleEmailChange = (value) => {
        setEmail(value);
    }

    const handleSenhaChange = (value) => {
        setSenha(value);
    }

    const handleDataNascimentoChange = (value) => {
        const formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
        setDataNascimento(formattedValue);
    }

    const isValidDate = (date) => {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
        if (!regex.test(date)) return false;

        const [day, month, year] = date.split('/').map(Number);
        const isValidDay = day > 0 && day <= new Date(year, month, 0).getDate();
        return isValidDay;
    }

    const handleNomeBlur = () => {
        if (!nome) {
            setErroNome('O nome completo não pode estar vazio.');
        } else {
            setErroNome('');
        }
    }

    const handleCpfBlur = () => {
        if (!cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
            setErroCpf('CPF inválido. Use o formato 000.000.000-00.');
        } else {
            setErroCpf('');
        }
    }

    const handleTelefoneBlur = () => {
        if (!telefone.match(/^\(\d{2}\) \d{5}-\d{4}$/)) {
            setErroTelefone('Telefone inválido. Use o formato (11) 99999-9999.');
        } else {
            setErroTelefone('');
        }
    }

    const handleEmailBlur = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || (!email.endsWith('.com') && !email.endsWith('.com.br'))) {
            setErroEmail('E-mail inválido. Use o formato email@email.com ou email@email.com.br.');
        } else {
            setErroEmail('');
        }
    }

    const handleSenhaBlur = () => {
        if (!senha.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
            setErroSenha('A senha deve conter pelo menos 6 caracteres, uma letra maiúscula e um símbolo.');
        } else {
            setErroSenha('');
        }
    }

    const handleConfirmEmailBlur = () => {
        if (confirmEmail !== email) {
            setErroConfirmEmail('Os e-mails não coincidem.');
        } else {
            setErroConfirmEmail('');
        }
    }

    const handleConfirmSenhaBlur = () => {
        if (confirmSenha !== senha) {
            setErroConfirmSenha('As senhas não coincidem.');
        } else {
            setErroConfirmSenha('');
        }
    }

    const handleDataNascimentoBlur = () => {
        if (!isValidDate(dataNascimento)) {
            setErroDataNascimento('Data inválida. Use o formato DD/MM/AAAA.');
        } else {
            setErroDataNascimento('');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        handleNomeBlur();
        handleCpfBlur();
        handleTelefoneBlur();
        handleEmailBlur();
        handleSenhaBlur();
        handleConfirmEmailBlur();
        handleConfirmSenhaBlur();
        handleDataNascimentoBlur();

        if (
            !erroNome &&
            !erroCpf &&
            !erroTelefone &&
            !erroEmail &&
            !erroSenha &&
            !erroConfirmEmail &&
            !erroConfirmSenha &&
            !erroDataNascimento
        ) {
            alert('Cadastro realizado com sucesso!');
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Crie sua conta!</h1>
                    <span>Ou <Link href="/cadastro" className={styles.createAccount}>faça login</Link> se já possuir uma conta.</span>
                </div>

                <div className={styles.cardAuth}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.campos}>
                            <div className={styles.esq}>
                                <div className={styles.input}>
                                    <label htmlFor="nome">Nome Completo</label>
                                    <input
                                        type="text"
                                        name="nome"
                                        id="nome"
                                        placeholder="Digite seu nome"
                                        value={nome}
                                        onChange={(e) => handleNomeChange(e.target.value)}
                                        onBlur={handleNomeBlur}
                                    />
                                    {erroNome && <p className={styles.erro}>{erroNome}</p>}
                                </div>

                                <div className={styles.input}>
                                    <label htmlFor="dataNascimento">Dia de Nascimento</label>
                                    <input
                                        type="text"
                                        name="dataNascimento"
                                        id="dataNascimento"
                                        placeholder="31/12/2000"
                                        value={dataNascimento}
                                        onChange={(e) => handleDataNascimentoChange(e.target.value)}
                                        onBlur={handleDataNascimentoBlur}
                                        maxLength="10"
                                    />
                                    {erroDataNascimento && <p className={styles.erro}>{erroDataNascimento}</p>}
                                </div>

                                <div className={styles.input}>
                                    <label htmlFor="cpf">CPF</label>
                                    <input
                                        type="text"
                                        name="cpf"
                                        id="cpf"
                                        placeholder="000.000.000-00"
                                        value={cpf}
                                        onChange={(e) => handleCpfChange(e.target.value)}
                                        onBlur={handleCpfBlur}
                                        maxLength="14"
                                    />
                                    {erroCpf && <p className={styles.erro}>{erroCpf}</p>}
                                </div>

                                <div className={styles.input}>
                                    <label htmlFor="telefone">Telefone</label>
                                    <input
                                        type="text"
                                        name="telefone"
                                        id="telefone"
                                        placeholder="(11) 99999-9999"
                                        value={telefone}
                                        onChange={(e) => handleTelefoneChange(e.target.value)}
                                        onBlur={handleTelefoneBlur}
                                        maxLength="15"
                                    />
                                    {erroTelefone && <p className={styles.erro}>{erroTelefone}</p>}
                                </div>
                            </div>
                            <div className={styles.dir}>
                                <div className={styles.input}>
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="amfernandes@hotmail.com"
                                        value={email}
                                        onChange={(e) => handleEmailChange(e.target.value)}
                                        onBlur={handleEmailBlur}
                                    />
                                    {erroEmail && <p className={styles.erro}>{erroEmail}</p>}
                                </div>
                                
                                <div className={styles.input}>
                                    <label htmlFor="confirmEmail">Confirmar E-mail</label>
                                    <input
                                        type="text"
                                        name="confirmEmail"
                                        id="confirmEmail"
                                        placeholder="amfernandes@hotmail.com"
                                        value={confirmEmail}
                                        onChange={(e) => setConfirmEmail(e.target.value)}
                                        onBlur={handleConfirmEmailBlur}
                                    />
                                    {erroConfirmEmail && <p className={styles.erro}>{erroConfirmEmail}</p>}
                                </div>

                                <div className={styles.input}>
                                    <label htmlFor="senha">Senha</label>
                                    <input
                                        type="password"
                                        name="senha"
                                        id="senha"
                                        placeholder="Sua senha"
                                        value={senha}
                                        onChange={(e) => handleSenhaChange(e.target.value)}
                                        onBlur={handleSenhaBlur}
                                    />
                                    {erroSenha && <p className={styles.erro}>{erroSenha}</p>}
                                </div>

                                <div className={styles.input}>
                                    <label htmlFor="confirmSenha">Confirmar senha</label>
                                    <input
                                        type="password"
                                        name="confirmSenha"
                                        id="confirmSenha"
                                        placeholder="Confirme sua senha"
                                        value={confirmSenha}
                                        onChange={(e) => setConfirmSenha(e.target.value)}
                                        onBlur={handleConfirmSenhaBlur}
                                    />
                                    {erroConfirmSenha && <p className={styles.erro}>{erroConfirmSenha}</p>}
                                </div>
                            </div>
                        </div>

                        <div className={styles.divBotao}>
                            <button type="submit" className={`${styles.botao}`}>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CadastroPage
