import { Activity, IActivity } from "./Activity";
import { Variable } from "./Variable";

export class Sequence extends Activity {
    public activities?: Activity[];

    public variables?: Variable[]
}