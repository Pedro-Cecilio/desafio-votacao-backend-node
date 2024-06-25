import {autenticacaoRepository} from "../../../../src/server/repositories/autenticacao"
import { AutenticacaoCompleta } from "../../../../src/server/shared/interface/autenticacao/AutenticacaoCompleta"

const buscarPorEmailSucessoMock = (dados: AutenticacaoCompleta)=>{
    jest.spyOn(autenticacaoRepository, "buscarPorEmail").mockResolvedValue(dados)
}
const buscarPorEmailFalhaMock = ()=>{
    jest.spyOn(autenticacaoRepository, "buscarPorEmail").mockResolvedValue(null)
}

export const autenticacaoRepositoryMock = {
    buscarPorEmailSucessoMock,
    buscarPorEmailFalhaMock,
}