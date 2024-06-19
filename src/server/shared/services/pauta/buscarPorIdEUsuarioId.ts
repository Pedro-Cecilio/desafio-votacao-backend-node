import { pautaRepository } from "../../../repositories/pauta"
import { NaoEncontradoErro } from "../../exececoes/erros"
import { PautaCompleta } from "../../interface/pauta/PautaCompleta"

export const buscarPorIdEUsuarioId = async (id: number, usuarioid: number): Promise<PautaCompleta> => {
    try {
        return await pautaRepository.buscarPorIdEUsuarioId(id, usuarioid)
    } catch (error) {
        throw new NaoEncontradoErro("Pauta não encontrada")
    }
}