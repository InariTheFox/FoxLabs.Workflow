export interface IDesignerMetadata {
    designer: Function
    displayName: string
    icon?: string
}

export class DesignerMetadata {
    private static metadata: Map<string, IDesignerMetadata> = new Map<string, IDesignerMetadata>();

    public static getByTypeName(typeName: string): IDesignerMetadata | undefined {
        if (!this.metadata.has(typeName)) {
            return undefined;
        }

        return this.metadata.get(typeName)!;
    }
}