import { Pauta, SessaoVotacao, Usuario } from "@prisma/client";

export interface PautaCompleta extends Pauta{
    usuario: Usuario
    sessaoVotacao: SessaoVotacao | null
}