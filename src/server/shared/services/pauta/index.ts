import { buscarAtivas } from "./buscarAtivas";
import { buscarPorIdEUsuarioId } from "./buscarPorIdEUsuarioId";
import { buscarPorUsuarioId } from "./buscarPorUsuarioId";
import { criar } from "./criar";

export const pautaService = {
    criar,
    buscarPorIdEUsuarioId,
    buscarPorUsuarioId,
    buscarAtivas
}