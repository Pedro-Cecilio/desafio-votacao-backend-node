export class VotacaoErro extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

export class ValidacaoErro extends VotacaoErro {
    constructor(message: string) {
        super(message, 400);
    }
}

export class NaoEncontradoErro extends VotacaoErro {
    constructor(message: string) {
        super(message, 404);
    }
}