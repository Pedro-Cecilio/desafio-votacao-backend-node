import moment from "moment";
import { SessaoVotacaoCompleta } from "../../../src/server/shared/interface/sessaoVotacao/SessaoVotacaoCompleta";
import { PautaFixture } from "../pauta/PautaFixture";

export class SessaoVotacaoCompletaFixture{
    public static criar(): SessaoVotacaoCompleta{
        return {
            id: 1,
            dataAbertura: moment().toDate(),
            dataFechamento: moment().add(10, 'minutes').toDate(),
            pauta: PautaFixture.criar(),
            pautaId: 1,
            votos: []
        }
    }
}