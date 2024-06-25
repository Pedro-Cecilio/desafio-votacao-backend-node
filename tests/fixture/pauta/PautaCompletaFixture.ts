import { Categoria } from "@prisma/client";
import { PautaCompleta } from "../../../src/server/shared/interface/pauta/PautaCompleta";
import { fakerPT_BR } from "@faker-js/faker";
import moment from "moment";
import {UsuarioFixture} from "../../fixture/usuario/UsuarioFixture"
export class PautaCompletaFixture{
    public static criarSessaoNula(): PautaCompleta{
        return {
            id: 1,
            assunto: "Você está migrando de linguagem?",
            categoria: fakerPT_BR.helpers.enumValue(Categoria),
            createdAt: moment().toDate(),
            sessaoVotacao:null,
            usuario: UsuarioFixture.criarNovo(),
            usuarioId: 1
        }
    }
}