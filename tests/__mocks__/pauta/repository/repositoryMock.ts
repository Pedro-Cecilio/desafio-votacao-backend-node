import { pautaRepository } from "../../../../src/server/repositories/pauta"
import { PautaCompleta } from "../../../../src/server/shared/interface/pauta/PautaCompleta"

const criarMock = (dados: PautaCompleta) => {
    jest.spyOn(pautaRepository, "criar").mockResolvedValue(dados)
}
const buscarPorUsuarioIdMock = (dados: PautaCompleta[]) => {
    jest.spyOn(pautaRepository, "buscarPorUsuarioId").mockResolvedValue(dados)
}
const buscarPorIdEUsuarioIdSucessoMock = (dados: PautaCompleta) => {
    jest.spyOn(pautaRepository, "buscarPorIdEUsuarioId").mockResolvedValue(dados)
}
const buscarPorIdEUsuarioIdFalhaMock = () => {
    jest.spyOn(pautaRepository, "buscarPorIdEUsuarioId").mockRejectedValue(null)
}

const buscarAtivasMock = (dados: PautaCompleta[]) => {
    jest.spyOn(pautaRepository, "buscarAtivas").mockResolvedValue(dados)
}

const buscarAtivaPorIdSucessoMock = (dados: PautaCompleta) => {
    jest.spyOn(pautaRepository, "buscarAtivaPorId").mockResolvedValue(dados)
}
const buscarAtivaPorIdFalhaMock = () => {
    jest.spyOn(pautaRepository, "buscarAtivaPorId").mockRejectedValue(null)
}
export const pautaRepositoryMock = {
    criarMock,
    buscarPorUsuarioIdMock,
    buscarPorIdEUsuarioIdSucessoMock,
    buscarPorIdEUsuarioIdFalhaMock,
    buscarAtivasMock,
    buscarAtivaPorIdSucessoMock,
    buscarAtivaPorIdFalhaMock
}