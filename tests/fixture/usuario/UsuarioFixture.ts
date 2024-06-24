import { Usuario } from "@prisma/client";
import { CriarUsuarioDto } from "../../../src/server/shared/dto/usuario/CriarUsuarioDto";

export class UsuarioFixture{
    public static criar(dados: CriarUsuarioDto): Usuario{
        return {
            id: 1,
            nome: dados.nome,
            sobrenome: dados.sobrenome,
            cpf: dados.cpf,
            admin: dados.admin,
        }
    }
}