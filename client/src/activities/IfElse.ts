import { Activity, IActivity } from "./Activity";

export class IfElse extends Activity {
    public condition?: Activity<boolean>;
    
    public if?: Activity;
    
    public else?: Activity;
}