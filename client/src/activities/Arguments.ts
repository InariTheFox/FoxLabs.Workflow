import { triggerAsyncId } from "async_hooks";

export interface IArgument {
    name: string;
    typeArgument: string;
}

export class InArgument implements IArgument {
    constructor(name: string, typeArgument: string) {
        this.name = name;
        this.typeArgument = typeArgument;
    }

    name: string
    typeArgument: string
}

export class InOutArgument implements IArgument {
    constructor(name: string, typeArgument: string) {
        this.name = name;
        this.typeArgument = typeArgument;
    }

    name: string;
    typeArgument: string;
}

export class OutArgument implements IArgument {
    constructor(name: string, typeArgument: string) {
        this.name = name;
        this.typeArgument = typeArgument;
    }

    name: string;
    typeArgument: string;
}