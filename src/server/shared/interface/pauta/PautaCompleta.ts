import { Pauta, Usuario } from "@prisma/client";
import { SessaoVotacaoCompleta } from "../sessaoVotacao/SessaoVotacaoCompleta";

export interface PautaCompleta extends Pauta{
    usuario: Usuario
    sessaoVotacao: SessaoVotacaoCompleta | null
}