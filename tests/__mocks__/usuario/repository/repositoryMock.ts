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

export const usuarioRepositoryMock = {
    criar,
    buscarPorIdSucesso,
    buscarPorIdFalha
}