import { fakerPT_BR } from "@faker-js/faker";

export class AutenticacaoFixture {
    public static readonly SENHA_ALEATORIA: string = fakerPT_BR.internet.password({ length: 8 })
}