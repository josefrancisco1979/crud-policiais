 
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

 
 
