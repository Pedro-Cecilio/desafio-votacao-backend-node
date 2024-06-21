import { pautaRepository } from "../../../repositories/pauta"
import { NaoEncontradoErro } from "../../exececoes/erros";
import { PautaCompleta } from "../../interface/pauta/PautaCompleta"
import { pautaMapper } from "../../mappers/PautaMapper";
import { converterParaNumber } from "../../utils/utils";

export const buscarAtivaPorId = async (id: string) => {
    try {  
        const idNumerico: number = converterParaNumber(id);
        const pauta: PautaCompleta = await pautaRepository.buscarAtivaPorId(idNumerico);
        return pautaMapper.pautaCompletaToRespostaPautaDto(pauta)
    } catch (error) {
        throw new NaoEncontradoErro("Pauta não encontrada.")
    }
}