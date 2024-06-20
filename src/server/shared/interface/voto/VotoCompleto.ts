import { Usuario, Voto } from "@prisma/client";
import { SessaoVotacaoCompleta } from "../sessaoVotacao/SessaoVotacaoCompleta";

export interface VotoCompleto extends Voto{
    usuario: Usuario | null;
    SessaoVotacao: SessaoVotacaoCompleta;
}