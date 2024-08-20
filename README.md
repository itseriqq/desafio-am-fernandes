# Desafio AM Fernandes

Este repositório contém o código desenvolvido por **Erick Augusto** como parte do desafio proposto pela AM Fernandes para a última etapa do processo seletivo para a vaga de estágio em desenvolvimento front-end. O projeto foi implementado em **08/2024** utilizando **Next.js** na versão **14.2**.

## Descrição do Projeto

O desafio consistiu em desenvolver uma página web que realizasse uma requisição para uma API fornecida pela AM Fernandes, que retorna dados de imóveis. Com base nos dados retornados pela API, foi implementado um algoritmo de ordenação que permite ordenar os imóveis com base no preço (maior ou menor preço), em ordem alfabética em relação ao bairro ou em relação à rua, além disso foram criados filtros por localização, quartos e número de vagas disponíveis por imóvel.

## Inicialização

Caro leitor, caso tenha interesse de rodar a aplicação e ter o repositório em sua máquina você deve seguir os seguintes passos:

1. **Clone o repositório**: Clone este repositório em sua máquina local utilizando o comando:

```

 git clone https://github.com/itseriqq/desafio-am-fernandes.git

```

2. **Instale as dependências**: Navegue até o diretório do projeto e instale as dependências necessárias utilizando o npm:

```
 - cd desafio-am-fernandes
 - npm install 

```

3. **Inicie a aplicação**: Após a instalação das dependências, inicie o servidor de desenvolvimento:

```
 - npm run dev

```

### Funcionalidades Desenvolvidas

- **Requisição à API**: O projeto faz uma requisição GET para a API da AM Fernandes que retorna os dados dos imóveis.
- **Algoritmo de Ordenação**: Um algoritmo de ordenação foi implementado para ordenar os imóveis, no caso o critério de ordenação escolhido foi o preço.
- **Interface Visual**: A interface foi projetada para exibir os imóveis de forma clara e atraente, utilizando bibliotecas de estilização para melhorar a experiência do usuário. Além disso, foi criada uma navbar e um footer responsivos para auxiliar o usuário na transição entre as páginas do projeto.  
- **Exibição de Imóveis**: Os dados dos imóveis são exibidos em cards, com informações relevantes como rua, bairro, cidade, número de quartos, vagas, metragem, preço e uma imagem da fachada.
- **Carrossel**: Foi criado um carrossel que é utilizado na página individual para que o usuário possa navegar entre as imagens do imóvel.
- **Verificação de Inputs**: Há uma verificação dos dados inseridos nos inputs da página de cadastro, onde dependendo se os dados inseridos pelo usuário constam como inválido, existem mensagens de auxílio para correção dos erros.
- **Criação de ID Único**: Foi criada uma função para criar uma String que funciona como ID único para cada imóvel. Por exemplo, se tivermos o _lat=`-23.340`, o _long=`-21.234`, a função transforma os números em positivo e, em seguida, em String, retira o 'ponto', e compara seu valor. A propriedade que for maior, fica na frente na concatenação. Depois, quando a página individual de imóvel é carregada, ocorre a requisição à API novamente procurando pelo imóvel com o mesmo 'ID'. Essa função não é performática, mas foi a forma encontrada para lidar com as páginas dinâmicas para cada item.

### Páginas e Componentes Desenvolvidos

- **Landing Page**: Foi criada uma landing page minimalista e atraente que possuí duas sections. Em ambas as sections, existem botões que levam o usuário às demais páginas do website.
- **Imóveis**: A página de imóveis é onde ocorre a requisição à API e display dos cards com as informações referentes aos imóveis. Os cards foram todos desenvolvidos manualmente. Nesta página, é onde a parte referente à ordenação ocorre, sendo feito uma ordenação por preço (menor ou maior preço) de acordo com a escolha do usuário. Além disso, há também o display de inputs para filtragem de itens de acordo com os critérios como Localização, Quantidade de Quartos, Quantidade de Vagas e Bairro.
- **Imóvel Específico**: A página de imóvel específico funciona através do ID único explicado anteriormente. Não é performática e serve apenas como exemplo. Ela carrega dinamicamente a página com as informações que o usuário quiser clicar. O ID único é criado a partir das propriedades _lat e _long de cada imóvel. 
- **Contato**: A página de contato possui um formulário para preenchimento onde o usuário pode enviar uma mensagem direto ao e-mail da AM Fernandes e também informações de contato. Além disso, possuí informações da localização da empresa e um breve trecho sobre a empresa.
- **Localização**: A página de localização possuí tanto informações da localização da sede da empresa quanto um mapa do Google com as informações fornecidas, auxiliando a navegação do usuário.
- **Página de Autenticação**: A página de autenticação é referente ao login, onde há o botão na navbar para que o usuário faça login com suas credenciais. Dentro dessa página, o usuário pode também clicar nos direcionadores para criar uma conta caso ele não possua uma.
- **Página de Cadastro**: A página de cadastro pode ser acessada tanto através da landing page quanto da página de autenticação. É nela, também, que foi colocado uma demonstração de verificação de conteúdo dos inputs. Portanto, o usuário só consegue realizar o 'cadastro' caso suas informações correspondam e estejam em um formato válido.
- **Navbar e Footer**: A navbar e o footer foram desenvolvidos para servirem como pontos de direcionamento. Eles funcionam responsivamente assim como todas as páginas, auxiliando em uma experiência de usuário fluida.

## Tecnologias Utilizadas

- **Next.js 14.2**: Framework utilizado para desenvolver o projeto.
- **React.js**: Biblioteca JavaScript para criar interfaces de usuário.
- **Biblioteca de Estilização**: Utilizada para estilizar as páginas com ícones e/ou componentes (ex: MaterialUI, Bootstrap).
- **Axios**: Biblioteca para fazer requisições HTTP.

## API Utilizada

A API da AM Fernandes foi utilizada para obter os dados dos imóveis. A rota principal da API é `/imoveis`, e o método GET retorna todos os dados.

- **URL da API**: [https://api.estagio.amfernandes.com.br/imoveis](https://api.estagio.amfernandes.com.br/imoveis)
- **Documentação da API**: [https://api.estagio.amfernandes.com.br/docs/#/API/get_imoveis](https://api.estagio.amfernandes.com.br/docs/#/API/get_imoveis)

## Dúvidas

Para quaisquer dúvidas ou apontamentos, favor entrar em contato a partir do e-mail: 

- **E-mail**: erickaug13@hotmail.com
