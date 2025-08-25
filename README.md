# Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```
# Frontend - Sistema de Cadastro de Policiais

Este frontend é uma aplicação Angular para cadastro e listagem de policiais, consumindo a API do backend.

## Funcionalidades
- Formulário reativo para cadastro de policial
- Listagem de policiais cadastrados em tabela
- Validação de campos obrigatórios e CPF
- Layout moderno e responsivo (CSS/Angular Material)

## Como rodar o frontend

1. Instale as dependências:
    ```bash
    npm install
    ```
2. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```
3. Acesse em `http://localhost:4200`

## Estrutura sugerida
```
frontend/
   src/
      app/
         cadastrar-policial/
         services/
      index.html
      main.ts
      styles.css
   package.json
   angular.json
```

## Requisitos
- Node.js 18+
- Angular CLI 19+

## Observações
- Certifique-se de que o backend está rodando para o frontend funcionar corretamente.
- O frontend consome a API REST do backend para cadastrar e listar policiais.
# Backend - Sistema de Cadastro de Policiais

Este backend fornece uma API RESTful para cadastro, listagem e validação de policiais, utilizando Node.js, Express e MySQL.

## Funcionalidades
- Cadastro de policial (com validação de CPF)
- Listagem de policiais
- Integração com banco de dados MySQL
- Validação de campos obrigatórios

## Como rodar o backend

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o acesso ao banco de dados em `.env` ou `config/` (ajuste conforme seu projeto).
3. Inicie o servidor:
   ```bash
   npm start
   ```
4. O backend estará disponível em `http://localhost:3000`

## Endpoints principais
- `POST /policiais` — cadastra um policial
- `GET /policiais` — lista todos os policiais

## Estrutura sugerida
```
backend/
  controllers/
  models/
  routes/
  config/
  app.js
  package.json
```

## Requisitos
- Node.js 18+
- MySQL

## Observações
- Certifique-se de que o banco de dados está rodando antes de iniciar o backend.
- O backend faz validação de CPF e campos obrigatórios.



Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
