import { buscarPorCpf } from "./buscarPorCpf";
import { buscarPorId } from "./buscarPorId";
import { criar } from "./criar";

export const usuarioService = {
    criar,
    buscarPorId,
    buscarPorCpf
}