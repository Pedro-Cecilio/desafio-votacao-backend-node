import { Categoria } from "@prisma/client";
import { UsuarioRespostaDto } from "../usuario/UsuarioRespostaDto";
import { RespostaSessaoVotacaoDto } from "../sessaoVotacao/RespostaSessaoVotacaoDto";

export class RespostaPautaDto{
    id: number;
    assunto: string;
    categoria: Categoria;
    usuario: UsuarioRespostaDto;
    sessaoVotacao: RespostaSessaoVotacaoDto | null

    public constructor(id: number, assunto: string, categoria: Categoria, usuario: UsuarioRespostaDto, sessaoVotacao: RespostaSessaoVotacaoDto | null){
        this.id = id
        this.assunto = assunto
        this.categoria = categoria
        this.usuario = usuario
        this.sessaoVotacao = sessaoVotacao
    }   
}