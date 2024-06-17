import { Autenticacao, Usuario } from "@prisma/client";
import { AutenticacaoDto } from "../../dto/autenticacao/autenticacaoDto";
import { autenticacaoValidacoes } from "../../validacoes/autenticacao/autenticacaoValidacoes";
import { autenticacaoRepository } from "../../../repositories/autenticacao";
import { autenticacaoService } from ".";

export const criar = async (dados: AutenticacaoDto, usuario: Usuario): Promise<Autenticacao>=> {
    await autenticacaoValidacoes.validarSePodeCadastrarEmail(dados.email)

    const senhaEncriptada: string = await autenticacaoService.encriptarSenha(dados.senha)

    return await autenticacaoRepository.criar(dados.email, senhaEncriptada, usuario)
}