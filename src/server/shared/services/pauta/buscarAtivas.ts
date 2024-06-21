import { pautaRepository } from "../../../repositories/pauta"
import { RespostaPautaDto } from "../../dto/pauta/RespostaPautaDto";
import { PautaCompleta } from "../../interface/pauta/PautaCompleta";
import { pautaMapper } from "../../mappers/PautaMapper";

export const buscarAtivas = async (): Promise<RespostaPautaDto[]> => {
   const pautas: PautaCompleta[] = await pautaRepository.buscarAtivas();
   return pautaMapper.listaPautaCompletaToListaRespostaPautaDto(pautas)
}