export class ActivityMetadata {
    private static metadata: Map<string, object> = new Map<string, object>();

    public static getByTypeName(typeName: string): object | undefined {
        if (!this.metadata.has(typeName.toLowerCase())){
            return undefined;
        }

        return this.metadata.get(typeName.toLowerCase())!;
    }

    public static register(typeName: string, prototype: object) {
        this.metadata.set(typeName.toLowerCase(), prototype);
    }
}