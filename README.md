## VotaçãoApp

VotaçãoApp é uma aplicação de votação que permite a criação de novos usuários votantes e administradores, além da criação de pautas e sessões de votação.

### Objetivo
O objetivo principal da VotaçãoApp é fornecer uma plataforma para administradores gerenciarem pautas e sessões de votação, enquanto os usuários podem votar nas pautas e explorar as pautas ativas.

### Funcionalidades Principais
- Administração de Usuários: Administradores podem criar novos usuários votantes e outros administradores.
- Gestão de Pautas: Administradores podem criar pautas para votação.
- Sessões de Votação: Administradores podem abrir sessões de votação para as pautas criadas.
- Votação em Pautas: Tanto os usuários votantes quanto os administradores podem votar nas pautas abertas pelos administradores.
- Exploração de Pautas: Usuários podem visualizar as pautas ativas.

### Tecnologias Utilizadas
- Node.js: Ambiente de execução JavaScript no lado do servidor.
- TypeScript: Superconjunto de JavaScript que adiciona tipos estáticos.
- Fastify: Framework web focado em desempenho e baixa sobrecarga.
- Prisma: ORM (Object-Relational Mapping) para interagir com bancos de dados.
- Jest: Framework de testes para JavaScript.
- bcrypt: Biblioteca para hashing de senhas.
- jsonwebtoken: Biblioteca para criar e verificar tokens JWT (JSON Web Tokens).
- class-validator e class-transformer: Bibliotecas para validação e transformação de objetos.
- moment: Biblioteca para manipulação de datas e horários.
- faker-js: Geração de dados falsos para testes e desenvolvimento.


### Como Usar
1. **Clonar repositório**:
     ```bash
    git clone https://github.com/Pedro-Cecilio/desafio-votacao-backend-node.git
    ```
2. **Acessar raiz do projeto**
3. **Instalar depencências do projeto**
   ```bash
    npm i
    ```
4. **Crie um banco de dados postgres**
5. **Configurar .env**:
     - Encontre o arquivo .env.example, e a partir dele crie um arquivo .env.
     ```env
        DATABASE_URL=postgres://user:password@localhost:5432/mydatabase
        JWT_SECRET=your_jwt_secret_key
      ```
     - Substritua os seguintes dados por dados do seu respectivo banco de dados.
         - user: usuário de acesso ao seu postgres
         - password: senha de acesso ao seu postgres
         - mydatabase: Nome do banco de dados
         - your_jwt_secret_key: Senha desejada, para que seja inserida nos jwt gerados por essa aplicação.
6. **Rode as migrations no seu banco de dados configurado**
     ```bash
      npx prisma migrate deploy
      ```
7. **Atualize o schema prisma**
     ```bash
      npx prisma generate
      ```
8. **Executar aplicação**:
     ```bash
      npm run dev
      ```


### Executar testes:
  ```bash
      npm run test
  ```
