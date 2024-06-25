import { usuarioRepositoryMock } from "../../../../__mocks__/usuario/repository/repositoryMock"
import {usuarioService} from "../../../../../src/server/shared/services/usuario"
describe('Service de usuário - buscarPorId', () => {
    it('Deve buscar um usuário por id corretamente', async () => {
        usuarioRepositoryMock.buscarPorIdSucesso()
        await expect(usuarioService.buscarPorId(1)).resolves.not.toThrow()
    })

    it('Deve falhar ao buscar um usuário por id', async () => {
        usuarioRepositoryMock.buscarPorIdFalha()
        await expect(usuarioService.buscarPorId(1)).rejects.toThrow(/^Usuário não encontrado.$/)
    })
})