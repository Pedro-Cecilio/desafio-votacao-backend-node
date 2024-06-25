import {pautaRepository} from "../../../../src/server/repositories/pauta"
import { PautaCompleta } from "../../../../src/server/shared/interface/pauta/PautaCompleta"

const criarMock = (dados: PautaCompleta)=>{
    jest.spyOn(pautaRepository, "criar").mockResolvedValue(dados)
}

export const pautaRepositoryMock = {
    criarMock
}