import { Usuario } from "@prisma/client";
import { InserirVotoExternoDto } from "../../dto/voto/InserirVotoExternoDto";
import { classValidatorValidacoes } from "../../validacoes/classValidator/classValidatorValidacoes";
import { usuarioService } from "../usuario";
import { SessaoVotacaoCompleta } from "../../interface/sessaoVotacao/SessaoVotacaoCompleta";
import { sessaoVotacaoService } from "../sessaoVotacao";
import { votoValidacoes } from "../../validacoes/voto/votoValidacoes";
import { VotoCompleto } from "../../interface/voto/VotoCompleto";
import { votoRepository } from "../../../repositories/voto";
import { SessaoVotacaoRespostaDto } from "../../dto/sessaoVotacao/SessaoVotacaoRespostaDto";

export const votoExterno = async (dados: InserirVotoExternoDto): Promise<SessaoVotacaoRespostaDto> => {
    await classValidatorValidacoes.validarDto(dados);

    const usuario: Usuario | null = await usuarioService.buscarPorCpf(dados.cpf)
    const sessaoVotacao : SessaoVotacaoCompleta = await sessaoVotacaoService.buscarPorPautaIdEAtiva(dados.pautaId)
    await votoValidacoes.validarSePodeVotarExternamente(usuario, dados.senha)
    const voto: VotoCompleto = await votoRepository.votar(dados.cpf, dados.tipoDeVoto, sessaoVotacao, usuario?.id ?? null)
    return new SessaoVotacaoRespostaDto(voto.SessaoVotacao)
}