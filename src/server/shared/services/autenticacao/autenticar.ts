import { AutenticacaoDto } from "../../dto/autenticacao/AutenticacaoDto";
import { classValidatorValidacoes } from "../../validacoes/classValidator/classValidatorValidacoes";
import { autenticacaoRepository } from "../../../repositories/autenticacao";
import { AutenticacaoErro } from "../../exececoes/erros";
import { tokenService } from "../token";
import { AutenticacaoRespostaDto } from "../../dto/autenticacao/AutenticacaoRespostaDto";
import { autenticacaoValidacoes } from "../../validacoes/autenticacao/autenticacaoValidacoes";

export const autenticar = async (dados: AutenticacaoDto): Promise<AutenticacaoRespostaDto> => {
    await classValidatorValidacoes.validarDto(dados)

    const autenticacao = await autenticacaoRepository.buscarPorEmail(dados.email)
    if (!autenticacao) throw new AutenticacaoErro("Dados de login inválidos.")

    await autenticacaoValidacoes.validarSenha(dados.senha, autenticacao.senha)

    const token = tokenService.criar(autenticacao)

    return new AutenticacaoRespostaDto(token, autenticacao.usuario.admin)
}