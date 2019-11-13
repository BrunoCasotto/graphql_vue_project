# graphql vue project

<img width="750" alt="Imagem do layout do site" src="https://github.com/BrunoCasotto/graphql_vue_project/blob/master/Captura%20de%20Tela%202019-11-13%20a%CC%80s%2012.08.54.png">


Um projeto simples utilizando um ambiente docker para simular micro serviços sendo consumidos por um servidor com graphql. O projeto funciona assim:<br> uma api disponibiliza uma lista de times de basquete, outra api disponibiliza uma lista de todos jogadores. Utilizando nossa terceira api com o [apollo server](https://github.com/apollographql/apollo-server) obtemos o time baseado na pesquisa do nosso front-end e buscamos e inserimos os jogadores  que atuam nesse time no resultado da query de forma transparente para nosso front.<br>
O projeto roda dentro de containers utilizando docker e docker-compose.Os containers são apiTeams[node], apiPlayers[node], server[apolloserver - node] e frontend[nginx com proxy reverso para o server].

## Pre requisitos de ambiente
 - ter o Docker instalado

## Para iniciar o projeto
- baixe o projeto do github
- acesse a pasta do projeto <br>
 ### Se você estiver utilizando o VsCode:<br>
 abra Terminal -> Run task -> <b>initialize</b> ou <b>run:development</b></br></br>

 ### Caso contrario:<br>
 abra o terminal e execute:</br>
* navegue ate as pasta frontend e execute: ```npm i && npm run build```<br>
* em seguida execute ```docker-compose up```<br><br>

Em ambos os casos o projeto estará disponível em localhost:8080.

## Tecnologias utilizadas no projeto
* NodeJs
* Docker
* GraphQl
* VueJs

<p>Este projeto tem propósito de estudo</p>
