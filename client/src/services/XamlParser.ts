import { Activity } from "../activities/Activity";
import { DynamicActivity } from "../activities/DynamicActivity";
import { ActivityMetadata } from "./ActivityMetadataService";

export class XamlParser {
    public static parse(document: string): Activity {

        var parser = new DOMParser();
        var root = parser.parseFromString(document, "application/xml").getRootNode().firstChild;

        if (!root) {
            throw "Invalid document.";
        }

        console.log(root);

        var rootActivity = new DynamicActivity();

        var currentNode = root.firstChild?.nodeName;

        if (currentNode) {
            console.log(currentNode);
            var current = ActivityMetadata.getByTypeName(currentNode);
            console.log(current);
        }

        return rootActivity;
    }
}