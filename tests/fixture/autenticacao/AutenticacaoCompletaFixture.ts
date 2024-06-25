import { AutenticacaoCompleta } from "../../../src/server/shared/interface/autenticacao/AutenticacaoCompleta";
import { fakerPT_BR } from "@faker-js/faker"
import { UsuarioFixture } from "../usuario/UsuarioFixture"
export class AutenticacaoCompletaFixture {
    public static criar(): AutenticacaoCompleta {
        return {
            id: 1,
            email: fakerPT_BR.internet.email(),
            senha: fakerPT_BR.internet.password({ length: 8 }),
            usuario: UsuarioFixture.criarNovo(),
            usuarioId: 1
        }
    }
}