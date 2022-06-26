export interface IVariable {
    typeName: string;
}

export class Variable implements IVariable {
    constructor(typeName: string) {
        this.typeName = typeName;
    }

    public typeName: string;
}
