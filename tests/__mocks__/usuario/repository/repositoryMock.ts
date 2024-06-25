import { Usuario } from "@prisma/client"
import { usuarioRepository } from "../../../../src/server/repositories/usuario"
import { CriarUsuarioDto } from "../../../../src/server/shared/dto/usuario/CriarUsuarioDto"
import { UsuarioFixture } from "../../../fixture/usuario/UsuarioFixture"

const criar = (dados: CriarUsuarioDto) => {
    jest.spyOn(usuarioRepository, "criar").mockResolvedValue(UsuarioFixture.criarComDto(dados))
}

const buscarPorIdSucesso = () => {
    const dados: Usuario = UsuarioFixture.criarNovo()
    jest.spyOn(usuarioRepository, "buscarPorId").mockResolvedValue(dados)
}
const buscarPorIdFalha = () => {
    jest.spyOn(usuarioRepository, "buscarPorId").mockRejectedValue(() => {
        throw new Error()
    })
}
const buscarPorCpfSucesso = (dados: Usuario) => {
    jest.spyOn(usuarioRepository, "buscarPorCpf").mockResolvedValue(dados)
}
const buscarPorCpfFalha = () => {
    jest.spyOn(usuarioRepository, "buscarPorCpf").mockResolvedValue(null)
}

export const usuarioRepositoryMock = {
    criar,
    buscarPorIdSucesso,
    buscarPorIdFalha,
    buscarPorCpfSucesso,
    buscarPorCpfFalha
}