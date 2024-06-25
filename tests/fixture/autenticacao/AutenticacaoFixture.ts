import { fakerPT_BR } from "@faker-js/faker";

export class AutenticacaoFixture {
    public static readonly SENHA_ALEATORIA: string = fakerPT_BR.internet.password({ length: 8 })

    public static criar(){
        return {
            id: 1,
            usuarioId: 1,
            email: fakerPT_BR.internet.email(),
            senha: fakerPT_BR.internet.password({length:8})
        }
    }
}