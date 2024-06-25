INSERT INTO "Usuario" ("nome", "sobrenome", "cpf", "admin")
VALUES ('Pedro', 'Cecilio', '12345678910', TRUE);

INSERT INTO "Autenticacao" ("email", "senha", "usuarioId")
VALUES ('admin@email.com', '$2a$12$2zBTPkNY0TqEnjpJCAQazuWjcMg9B30B.zb5Q3X1.oY8hKz7Jva5W', (SELECT id FROM "Usuario" WHERE cpf = '12345678910'));
