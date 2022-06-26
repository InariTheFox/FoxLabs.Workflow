import { OutArgument } from "./Arguments";

export interface IActivity {
    displayName?: string;
}

export abstract class Activity<T = void> implements IActivity {
    displayName?: string;
}

export abstract class ActivityWithResult extends Activity {
    result?: OutArgument;
}