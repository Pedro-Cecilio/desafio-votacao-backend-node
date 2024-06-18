import { Usuario } from "@prisma/client"
import { CriarUsuarioDto } from "../../shared/dto/usuario/criarUsuarioDto"
import { prisma } from "../../database/database"

export const criar = async (dados: CriarUsuarioDto, senhaEncriptada: string): Promise<Usuario> =>{
    return await prisma.usuario.create({
        data:{
            nome: dados.nome,
            sobrenome: dados.sobrenome,
            cpf: dados.cpf,
            admin: dados.admin,
            Autenticacao:{
                create:{
                    email: dados.autenticacaoDto.email,
                    senha: senhaEncriptada
                }
            }
        }
    })
}