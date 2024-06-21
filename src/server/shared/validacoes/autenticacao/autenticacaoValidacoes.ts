import { Autenticacao, Usuario } from "@prisma/client"
import { autenticacaoRepository } from "../../../repositories/autenticacao"
import { ValidacaoErro } from "../../exececoes/erros";
import bcrypt from "bcrypt";

const validarSePodeCadastrarEmail = async (email: string) => {
    const autenticacao: Autenticacao | null = await autenticacaoRepository.buscarPorEmail(email);
    if (autenticacao) throw new ValidacaoErro("Email já cadastrado.")
}

const validarSenha = async (senhaEsperada: string, senhaEncriptada: string) => {
    const valida: boolean = await bcrypt.compare(senhaEsperada, senhaEncriptada)
    if (!valida) throw new ValidacaoErro("Dados de login inválidos.")
}

const validarAutenticacao = async (usuario: Usuario, senha: string) => {
    try {
        const autenticacao: Autenticacao = await autenticacaoRepository.buscarPorUsuarioId(usuario.id)
        await validarSenha(senha, autenticacao.senha)
    } catch (error) {
        throw new ValidacaoErro("Dados de autenticação inválidos.")
    }
}


export const autenticacaoValidacoes = {
    validarSePodeCadastrarEmail,
    validarSenha,
    validarAutenticacao
}