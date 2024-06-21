import { buscarAtivaPorId } from "./buscarAtivaPorId";
import { buscarAtivas } from "./buscarAtivas";
import { buscarPorIdEUsuarioId } from "./buscarPorIdEUsuarioId";
import { buscarPorUsuarioId } from "./buscarPorUsuarioId";
import { criar } from "./criar";

export const pautaRepository = {
    criar,
    buscarPorIdEUsuarioId,
    buscarPorUsuarioId,
    buscarAtivas,
    buscarAtivaPorId
}