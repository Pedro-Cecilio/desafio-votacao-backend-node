import { TipoDeVoto, Voto } from "@prisma/client"
import { SessaoVotacaoCompleta } from "../../interface/sessaoVotacao/SessaoVotacaoCompleta"

export class SessaoVotacaoRespostaDto {
    id: number
    pautaId: number
    votosPositivos: number
    votosNegativos: number
    dataAbertura: Date
    dataFechamento: Date
    sessaoAtiva: boolean

    public constructor(dados: SessaoVotacaoCompleta) {
            this.id = dados.id
            this.pautaId = dados.pautaId
            this.votosPositivos = this.setVotosPositos(dados.votos)
            this.votosNegativos = this.setVotosNegativos(dados.votos)
            this.dataAbertura = dados.dataAbertura
            this.dataFechamento = dados.dataFechamento
            this.sessaoAtiva = this.setSessaoAtiva(dados.dataFechamento)
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