import { pautaRepository } from "../../../repositories/pauta";
import { CriarPautaDto } from "../../dto/pauta/CriarPautaDto";
import { classValidatorValidacoes } from "../../validacoes/classValidator/classValidatorValidacoes";
import { pautaMapper } from "../../mappers/PautaMapper";

export const criar = async (criarPautaDto: CriarPautaDto, usuarioId: number)=>{
    await classValidatorValidacoes.validarDto(criarPautaDto)
    const dados = await pautaRepository.criar(criarPautaDto, usuarioId)
    return pautaMapper.pautaCompletaToRespostaPautaDto(dados)
}