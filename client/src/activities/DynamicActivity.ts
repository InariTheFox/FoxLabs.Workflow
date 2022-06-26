import { Activity } from "./Activity";

export class DynamicActivity extends Activity {
    members?: DynamicActivityProperty
}

export class DynamicActivityProperty {
    constructor(name: string, type: string, defaultValue?: string) {
        this.name = name;
        this.type = type;
        this.defaultValue = defaultValue;
    }

    public defaultValue?: string;
    
    public name: string;
    
    public type: string;
}