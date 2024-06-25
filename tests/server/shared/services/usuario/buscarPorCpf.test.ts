import { Usuario } from "@prisma/client"
import { UsuarioFixture } from "../../../../fixture/usuario/UsuarioFixture"
import { usuarioRepositoryMock } from "../../../../__mocks__/usuario/repository/repositoryMock"
import { usuarioService } from "../../../../../src/server/shared/services/usuario"

describe("Service de usuário - buscarPorCpf", () => {
    it('Deve buscar um usuário por cpf corretamente', async () => {
        const usuarioMock: Usuario = UsuarioFixture.criarNovo()
        usuarioRepositoryMock.buscarPorCpfSucesso(usuarioMock)
        const resposta = await usuarioService.buscarPorCpf(usuarioMock.cpf)
        expect(resposta).not.toBeNull()
    })
    it('Não deve encontrar usuário ao buscar por cpf', async () => {
        usuarioRepositoryMock.buscarPorCpfFalha()
        const resposta = await usuarioService.buscarPorCpf(UsuarioFixture.CPF_ALEATORIO)
        expect(resposta).toBeNull()
    })
})