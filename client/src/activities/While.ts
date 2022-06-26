import { Activity, IActivity } from "./Activity";

export class While extends Activity {
    public body?: Activity;
    
    public condition?: Activity<boolean>;
}