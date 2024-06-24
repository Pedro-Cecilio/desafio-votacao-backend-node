import { usuarioRepository } from "../../../../src/server/repositories/usuario"
import { CriarUsuarioDto } from "../../../../src/server/shared/dto/usuario/CriarUsuarioDto"
import { UsuarioFixture } from "../../../fixture/usuario/UsuarioFixture"

const criar = (dados: CriarUsuarioDto) => {
    jest.spyOn(usuarioRepository, "criar").mockResolvedValue(UsuarioFixture.criar(dados))
}


export const usuarioRepositoryMock = {
    criar
}