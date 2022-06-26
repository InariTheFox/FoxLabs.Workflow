import { Activity } from "./Activity";

export class Assign extends Activity {
    public to?: string;

    public typeArgument?: string;
    
    public value?: string;
}