import { Storage } from "../util/storage";

export class Read {

    private readonly storage: Storage

    constructor() {

    }

    public async findAll() {
        return this.storage.read();
    }

}