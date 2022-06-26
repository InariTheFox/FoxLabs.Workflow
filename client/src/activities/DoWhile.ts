import { Activity } from "./Activity";
import { Variable } from "./Variable";

export class DoWhile extends Activity {
    public body?: Activity;
    
    public condition?: Activity<boolean>;
    
    public variables?: Variable[]
}