import { Usuario } from "@prisma/client"
import { CriarUsuarioDto } from "../../shared/dto/usuario/criarUsuarioDto"
import { prisma } from "../../database/database"

export const criar = async (usuario: CriarUsuarioDto): Promise<Usuario> =>{
    return await prisma.usuario.create({
        data:{
            nome: usuario.nome,
            sobrenome: usuario.sobrenome,
            cpf: usuario.cpf,
            admin: usuario.admin,
        }
    })
}