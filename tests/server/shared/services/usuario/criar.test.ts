import { CriarUsuarioDto } from "../../../../../src/server/shared/dto/usuario/CriarUsuarioDto"
import { usuarioService } from "../../../../../src/server/shared/services/usuario"
import { autenticacaoServiceMock } from "../../../../__mocks__/autenticacao/services/autenticacaoServiceMock"
import { usuarioRepositoryMock } from "../../../../__mocks__/usuario/repository/repositoryMock"
import { CriarUsuarioDtoFixture } from "../../../../fixture/usuario/criarUsuarioDtoFixture"

describe("Service de usuário - criar", () => {
    const encriptarSenhaMock = jest.fn();

    it("Deve criar um usuário corretamente", async () => {
        const usuario: CriarUsuarioDto = CriarUsuarioDtoFixture.dadosValidos()
        usuarioRepositoryMock.criar(usuario)
        autenticacaoServiceMock.encriptarSenha(encriptarSenhaMock)

        const resposta = await usuarioService.criar(usuario)

        expect(encriptarSenhaMock).toHaveBeenCalled()
        expect(resposta.nome).toBe(usuario.nome)
        expect(resposta.sobrenome).toBe(usuario.sobrenome)
        expect(resposta.cpf).toBe(usuario.cpf)
        expect(resposta.admin).toBe(usuario.admin)
        expect(resposta.email).toBe(usuario.autenticacaoDto.email)
    })

    it.each([
        [CriarUsuarioDtoFixture.semNome(), "Nome deve ser informado."],
        [CriarUsuarioDtoFixture.nomePequeno(), "Nome deve conter entre 3 e 20 caracteres."],
        [CriarUsuarioDtoFixture.nomeGrande(), "Nome deve conter entre 3 e 20 caracteres."],
        [CriarUsuarioDtoFixture.semSobrenome(), "Sobrenome deve ser informado."],
        [CriarUsuarioDtoFixture.sobrenomePequeno(), "Sobrenome deve conter entre 2 e 20 caracteres."],
        [CriarUsuarioDtoFixture.sobrenomeGrande(), "Sobrenome deve conter entre 2 e 20 caracteres."],
        [CriarUsuarioDtoFixture.semCpf(), "Cpf deve ser informado."],
        [CriarUsuarioDtoFixture.cpfInvalido(), "CPF deve conter 11 caracteres numéricos."],
        [CriarUsuarioDtoFixture.semAdmin(), "Admin deve ser informado."],
        [CriarUsuarioDtoFixture.semEmail(), "Email deve ser informado."],
        [CriarUsuarioDtoFixture.emailInvalido(), "Email com formato inválido."],
        [CriarUsuarioDtoFixture.semSenha(), "Senha deve ser informada."],
        [CriarUsuarioDtoFixture.senhaPequena(), "Senha deve conter 8 caracteres no mínimo."],
    ])("Deve falhar ao tentar criar ao passar dados inválidos", async (dados: CriarUsuarioDto, erro: string) => {
        const usuario: CriarUsuarioDto = dados;
        await expect(usuarioService.criar(usuario)).rejects.toThrow(erro);
    })
})