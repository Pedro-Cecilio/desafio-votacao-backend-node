import { TipoDeVoto, Voto } from "@prisma/client"

export class VotoRespostaDto {
    sessaoVotacaoId: number
    pautaId: number
    votosPositivos: number
    votosNegativos: number
    dataAbertura: Date
    dataFechamento: Date
    sessaoAtiva: boolean

    public constructor(
        sessaoVotacaoId: number,
        pautaId: number,
        votos: Voto[],
        dataAbertura: Date,
        dataFechamento: Date) {
            this.sessaoVotacaoId = sessaoVotacaoId
            this.pautaId = pautaId
            this.votosPositivos = this.setVotosPositos(votos)
            this.votosNegativos = this.setVotosNegativos(votos)
            this.dataAbertura = dataAbertura
            this.dataFechamento = dataFechamento
            this.sessaoAtiva = this.setSessaoAtiva(dataFechamento)
    }

    private setVotosPositos(votos: Voto[]) : number{
        return votos.filter(voto => voto.tipoDeVoto == TipoDeVoto.POSITIVO).length
    }
    private setVotosNegativos(votos: Voto[]) : number{
        return votos.filter(voto => voto.tipoDeVoto == TipoDeVoto.NEGATIVO).length
    }
    private setSessaoAtiva(dataFechamento: Date): boolean{
        return dataFechamento.getTime() > Date.now()
    }

}