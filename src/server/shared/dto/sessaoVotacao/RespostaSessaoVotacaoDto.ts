
export class RespostaSessaoVotacaoDto {
    id: number;
    pautaId: number;
    votosPositivos: number;
    votosNegativos: number;
    dataAbertura: Date;
    dataFechamento: Date;
    sessaoAtiva: boolean;
}