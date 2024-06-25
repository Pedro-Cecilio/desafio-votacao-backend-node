import { fakerPT_BR } from "@faker-js/faker";
import { Categoria, Pauta } from "@prisma/client";
import moment from "moment";

export class PautaFixture{
    public static criar(): Pauta{
        return {
            id: 1,
            assunto: "Você está migrando de linguagem?",
            categoria: fakerPT_BR.helpers.enumValue(Categoria),
            createdAt: moment().toDate(),
            usuarioId: 1
        }
    }
}