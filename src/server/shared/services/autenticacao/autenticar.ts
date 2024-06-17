import { AutenticacaoDto } from "../../dto/autenticacao/AutenticacaoDto";
import { classValidatorValidacoes } from "../../validacoes/classValidator/classValidatorValidacoes";
import { autenticacaoRepository } from "../../../repositories/autenticacao";
import { AutenticacaoErro } from "../../exececoes/erros";
import { autenticacaoService } from "."
import { tokenService } from "../token";
import { AutenticacaoRespostaDto } from "../../dto/autenticacao/AutenticacaoRespostaDto";

export const autenticar = async (dados: AutenticacaoDto): Promise<AutenticacaoRespostaDto> => {
    await classValidatorValidacoes.validarDto(dados)
    const autenticacao = await autenticacaoRepository.buscarPorEmail(dados.email)
    if (!autenticacao) throw new AutenticacaoErro("Dados de login inválidos.")
    const senhaValida: boolean = await autenticacaoService.compararSenha(dados.senha, autenticacao.senha)
    if (!senhaValida) throw new AutenticacaoErro("Dados de login inválidos.")

    const token = tokenService.criar(autenticacao)
    return new AutenticacaoRespostaDto(token, autenticacao.usuario.admin)
}