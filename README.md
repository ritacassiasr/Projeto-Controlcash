<h1 align="center"> Controlcash</h1>

<p align="center">
Desenvolvendo uma API REST que permite registrar as receitas e despesas de uma pessoa.
</p>

<br>

## 🚀 Habilidades

Neste projeto, desenvolvi as seguintes habilidades:

- Desenvolver funcionalidades da API guiado por testes (TDD);
- Conteinerizando a aplicação por meio do Dockerfile e docker-compose;
- Realizar operações assíncronas utilizando callbacks e Promises;
- Escrever scripts que criam e consomem Promises;
- Reescrever código que usa callbacks para que use Promises;
- Realizar chamadas de funções de forma consciente;
- Entender os conceitos básicos de como o JavaScript funciona;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Entender a diferença entre execução síncrona e assíncrona;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar meu código;
- Criar rotas e aplicar middlewares.

<br>

## ⛏ Ferramentas

`Node`, `Express`, `Middlewares`, `Status Code`, `API RESTful`, `Docker`

<br>

## 🧶 Desenvolvimento

Desenvolvimento de uma integração do banco de dados MySQL a uma aplicação Express utilizando a biblioteca mysql2, permitindo a criação de uma API com o Express, capaz de cadastrar, consultar, atualizar e excluir dados do MySQL, sendo a aplicação conteinerizada.

<br>

## :whale2: Rodando com Docker x Localmente

👉 Com Docker

> :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d`.

- Lembre-se de parar o `MySQL` se estiver usando localmente na porta padrão (`3306`), ou adapte o docker-compose caso queria fazer uso da aplicação em containers;

- Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `projetocontrolcash-database-1`;

- A partir daqui você pode acessar o container `controlcash_api` via CLI ou abri-lo no seu editor;

> :information_source: Use o comando `docker exec -it controlcash_api bash`.

- Ele te dará acesso ao terminal interativo do container criado pelo docker-compose, que está rodando em segundo plano.

> :information_source: Ao rodar o docker-compose, ele automaticamente irá rodar os seguintes comandos:

- `npm install`: Irá instalar todas as dependências;

- `npm start`: Irá rodar a aplicação na porta `30022` pelo `nodemon`, ou adapte o docker-compose, caso sinta necessidade.

### 👉 Sem Docker

> :information_source: Instale as dependências com `npm install`.

> :information_source: Rode a aplicação com `npm start` na porta `3002` pelo `nodemon`.

</details>
