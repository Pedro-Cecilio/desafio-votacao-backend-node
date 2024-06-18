import { criar } from "./criar";
import { buscarPorCpf } from "./buscarPorCpf";
import { buscarPorId } from "./buscarPorId";

export const usuarioRepository = {
    criar,
    buscarPorCpf,
    buscarPorId
}