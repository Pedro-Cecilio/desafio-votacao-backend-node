import { Usuario } from "@prisma/client"
import { usuarioRepository } from "../../../repositories/usuario"
import { NaoEncontradoErro } from "../../exececoes/erros";

export const buscarPorId = async (id: number): Promise<Usuario>=>{
    try {
        return await usuarioRepository.buscarPorId(id);
    } catch (error) {
        throw new NaoEncontradoErro("Usuário não encontrado.")
    }
}