import { Usuario } from "@prisma/client"
import { usuarioRepository } from "../../../repositories/usuario"

export const buscarPorCpf = async (cpf: string): Promise<Usuario | null>=>{
    return await usuarioRepository.buscarPorCpf(cpf)
}