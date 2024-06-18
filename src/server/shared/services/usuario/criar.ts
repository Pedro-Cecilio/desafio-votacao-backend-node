import { Autenticacao, Usuario } from "@prisma/client";
import { usuarioRepository } from "../../../repositories/usuario";
import { CriarUsuarioDto } from "../../dto/usuario/criarUsuarioDto";
import { classValidatorValidacoes } from "../../validacoes/classValidator/classValidatorValidacoes";
import { usuarioValidacoes } from "../../validacoes/usuario/usuarioValiacoes";
import { autenticacaoService } from "../autenticacao";
import { CriarUsuarioRespostaDto } from "../../dto/usuario/criarUsuarioRespostaDto";
import { autenticacaoValidacoes } from "../../validacoes/autenticacao/autenticacaoValidacoes";


export const criar = async (dados: CriarUsuarioDto): Promise<CriarUsuarioRespostaDto> => {
    await classValidatorValidacoes.validarDto(dados)

    await autenticacaoValidacoes.validarSePodeCadastrarEmail(dados.autenticacaoDto.email)
    await usuarioValidacoes.validarSePodeCadastrarCpf(dados.cpf)

    const senhaEncriptada: string = await autenticacaoService.encriptarSenha(dados.autenticacaoDto.senha)
    
    const usuario: Usuario = await usuarioRepository.criar(dados, senhaEncriptada)

    return new CriarUsuarioRespostaDto(usuario.id, usuario.nome, usuario.sobrenome, dados.autenticacaoDto.email, usuario.cpf, usuario.admin);
}