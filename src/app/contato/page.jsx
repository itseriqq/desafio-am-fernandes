import React from 'react'
import styles from "./contato.module.css"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const ContatoPage = () => {
  return (
    <div className="container">

      {/* inicio header */}
      <div className="row">
        <div className={`col-12 ${styles.header}`}>
          <h1>Fale Conosco</h1>
          <span>Estamos aqui para ajudá-lo a realizar seus sonhos imobiliários.</span>
        </div>
      </div>
      {/* fim header */}

      <div className="row">

        {/* inicio col form */}
        <div className={`col-md-12 col-lg-6 ${styles.form}`}>
          <div className={styles.input}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Digite seu nome"
            />
          </div>

          <div className={styles.input}>
            <label htmlFor="nome">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="amfernandes@email.com"
            />
          </div>

          <div className={styles.input}>
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              name="telefone"
              id="telefone"
              placeholder="(11) 99999-9999"
            />
          </div>

          <div className={styles.input}>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              name="mensagem"
              id="mensagem"
              placeholder="Digite seu mensagem"
              rows="4"
              cols="30"
            />
          </div>

          <div className={styles.divBotao}>
            <button className={`${styles.botao}`}>Enviar</button>
          </div>

        </div>
        {/* fim col form */}

        <div className="col-md-12 col-lg-6">
          {/* inicio div informacoes */}
          <div className={styles.informacoes}>

            <div className={styles.infoContato}>
              <h1>Informações de Contato</h1>
              <div className={styles.item}>
                <LocationOnOutlinedIcon />
                <span>Av. Pereira Barreto, 1479 - Baeta Neves, São Bernardo do Campo</span>
              </div>
              <div className={styles.item}>
                <LocalPhoneOutlinedIcon />
                <span>(11) 98306-4040</span>
              </div>
              <div className={styles.item}>
                <EmailOutlinedIcon />
                <span>amfernandes@email.com</span>
              </div>
            </div>
            <div className={styles.infoLocal}>
              <h1>Sobre a Empresa</h1>
              <span>A AM Fernandes é uma incorporadora imobiliária com mais de 20 anos de experiência no mercado, reconhecida pela sua trajetória de sucesso e comprometimento com a excelência.</span>
              <br />
              <br />
              <p>Nosso objetivo é transformar o conceito de moradia, criando espaços que não apenas atendam às necessidades dos nossos clientes, mas que superem suas expectativas.</p>
            </div>

          </div>

          {/* fim div informacoes */}

        </div>
      </div>


    </div>
  )
}

export default ContatoPage