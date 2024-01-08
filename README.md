# graphql vue project 🟢

<img width="750" alt="Imagem do layout do site" src="https://github.com/BrunoCasotto/graphql_vue_project/blob/master/Captura%20de%20Tela%202019-11-13%20a%CC%80s%2012.08.54.png">

A simple project using a Docker environment to simulate microservices being consumed by a GraphQL server. The project operates as follows:<br> An API provides a list of basketball teams, another API provides a list of all players. Using our third API with [Apollo Server](https://github.com/apollographql/apollo-server), we obtain the team based on the search from our frontend and transparently retrieve and insert the players who play for that team into the query result for our frontend.<br>
The project runs within containers using Docker and Docker Compose. The containers include apiTeams[node], apiPlayers[node], server[apolloserver - node], and frontend[nginx with reverse proxy to the server].
## Pre requisitos de ambiente
 - ter o Docker instalado

## Run in dev mode
- Clone repo
### If you'r using VsCode:<br>
Open terminal -> Run task -> <b>initialize</b> ou <b>run:development</b></br></br>

### Otherwise:<br>
Open terminal and execute:</br>
* navigate within frontend and execute: ```npm i && npm run build```<br>
* next execute ```docker-compose up```<br><br>

In both cases the project will be available in: ```localhost:8080```

## Stack
* NodeJs
* Docker
* GraphQl
* VueJs

<p>Student project 🤓</p>
