-- CreateEnum
CREATE TYPE "Categoria" AS ENUM ('TRANSPORTE', 'EDUCACAO', 'SAUDE', 'MORADIA', 'MEIO_AMBIENTE', 'CULTURA_LAZER', 'SEGURANCA', 'EMPREGO', 'SERVICOS_PUBLICOS', 'ASSUNTOS_GERAIS');

-- CreateTable
CREATE TABLE "Autenticacao" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Autenticacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(20) NOT NULL,
    "sobrenome" VARCHAR(20) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "admin" BOOLEAN NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pauta" (
    "id" SERIAL NOT NULL,
    "assunto" TEXT NOT NULL,
    "categoria" "Categoria" NOT NULL,
    "sessaoVotacaoId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pauta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SessaoVotacao" (
    "id" SERIAL NOT NULL,
    "pautaId" INTEGER NOT NULL,
    "dataAbertura" TIMESTAMP(3) NOT NULL,
    "dataFechamento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SessaoVotacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Voto" (
    "id" SERIAL NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "usuarioId" INTEGER,

    CONSTRAINT "Voto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Autenticacao_email_key" ON "Autenticacao"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pauta_sessaoVotacaoId_key" ON "Pauta"("sessaoVotacaoId");

-- CreateIndex
CREATE UNIQUE INDEX "SessaoVotacao_pautaId_key" ON "SessaoVotacao"("pautaId");

-- AddForeignKey
ALTER TABLE "Pauta" ADD CONSTRAINT "Pauta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SessaoVotacao" ADD CONSTRAINT "SessaoVotacao_pautaId_fkey" FOREIGN KEY ("pautaId") REFERENCES "Pauta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Voto" ADD CONSTRAINT "Voto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
