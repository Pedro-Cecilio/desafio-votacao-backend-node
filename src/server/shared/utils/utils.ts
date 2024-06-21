import moment, { Moment } from "moment";

export const obterDataAtual = (): Moment => {
    return moment();
}

export const converterParaNumber = (valor: any): number => {
    return Number(valor);
}