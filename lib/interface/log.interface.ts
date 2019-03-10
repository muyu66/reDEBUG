export namespace ILog {

    export interface RequestFormat {
        readonly id: string;
        readonly host: string;
        readonly path: string;
        readonly method: string;
        readonly query: object;
        readonly params: object;
        readonly headers: object;
        readonly body: any;
    }

    export interface ResponseFormat {
        readonly id: string;
        readonly statusCode: number;
        readonly message: string;
        readonly debug: any;
        readonly data: any;
    }

}