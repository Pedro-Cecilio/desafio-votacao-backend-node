import { Autenticacao, Usuario } from "@prisma/client";
import { usuarioRepository } from "../../../repositories/usuario";
import { CriarUsuarioDto } from "../../dto/usuario/criarUsuarioDto";
import { classValidatorValidacoes } from "../../validacoes/classValidator/classValidatorValidacoes";
import { usuarioValidacoes } from "../../validacoes/usuario/usuarioValiacoes";
import { autenticacaoService } from "../autenticacao";
import { CriarUsuarioRespostaDto } from "../../dto/usuario/criarUsuarioRespostaDto";


export const criar = async (dados: CriarUsuarioDto): Promise<CriarUsuarioRespostaDto> => {
    await classValidatorValidacoes.validarDto(dados)
    await usuarioValidacoes.validarSePodeCadastrarCpf(dados.cpf)
    const usuario: Usuario = await usuarioRepository.criar(dados)
    const autenticacao: Autenticacao = await autenticacaoService.criar(dados.autenticacaoDto, usuario)
    return new CriarUsuarioRespostaDto(usuario.id, usuario.nome, usuario.sobrenome, autenticacao.email, usuario.cpf, usuario.admin);
}