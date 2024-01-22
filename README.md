
# Desafio Full Cycle Módulo Docker

## Desafio Nodejs / Nginx

- Nesse desafio vamos colocar em prática o que aprendemos em relação a utilização do nginx como proxy reverso. 
- A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. 
- Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
- O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
- Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.


# Executar o container

- Antes de executar o container, crie um arquivo .env e adicione seus dados do banco mysql. Deixei um example.env como referência para implementação.
- Rode o comando npm install para instalar as dependências do projeto. Depois pode subir o docker.

```
npm install
docker-compose up -d --build
```

- Esta execução sobe o Mysql, sobe o service do nodejs, que aguarda o up do mysql. Depois sobe o Nginx que aguarda o up do service nodejs
- Foi Criado um migrate para ser executado n o UP do Service nodejs. Desta forma já teremos alguns nomes já pré carregados no banco.
- Se tudo correr bem, é só acessar o endereço http://localhost:8080

