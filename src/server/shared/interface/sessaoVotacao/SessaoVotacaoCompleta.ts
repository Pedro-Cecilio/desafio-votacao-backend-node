import { Pauta, SessaoVotacao, Voto } from "@prisma/client";

export interface SessaoVotacaoCompleta extends SessaoVotacao{
    pauta: Pauta
    votos: Voto[]
}