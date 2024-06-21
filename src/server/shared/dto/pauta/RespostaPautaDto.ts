import { Categoria } from "@prisma/client";
import { UsuarioRespostaDto } from "../usuario/UsuarioRespostaDto";
import { SessaoVotacaoRespostaDto } from "../sessaoVotacao/SessaoVotacaoRespostaDto";

export class RespostaPautaDto{
    id: number;
    assunto: string;
    categoria: Categoria;
    usuario: UsuarioRespostaDto;
    sessaoVotacao: SessaoVotacaoRespostaDto | null

    public constructor(id: number, assunto: string, categoria: Categoria, usuario: UsuarioRespostaDto, sessaoVotacao: SessaoVotacaoRespostaDto | null){
        this.id = id
        this.assunto = assunto
        this.categoria = categoria
        this.usuario = usuario
        this.sessaoVotacao = sessaoVotacao
    }   
}