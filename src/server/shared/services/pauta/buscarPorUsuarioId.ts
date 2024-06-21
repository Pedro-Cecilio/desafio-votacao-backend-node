import { pautaRepository } from "../../../repositories/pauta"
import { RespostaPautaDto } from "../../dto/pauta/RespostaPautaDto"
import { PautaCompleta } from "../../interface/pauta/PautaCompleta"
import { pautaMapper } from "../../mappers/PautaMapper"

export const buscarPorUsuarioId = async (usuarioId: number): Promise<RespostaPautaDto[]> => {
    const pautas: PautaCompleta[] = await pautaRepository.buscarPorUsuarioId(usuarioId)
    const resposta: RespostaPautaDto[] = pautaMapper.listaPautaCompletaToListaRespostaPautaDto(pautas)

    return resposta;
}