import { ReactElement, createElement } from "react";
import { CiphixJSONViewerPreviewProps } from "../typings/CiphixJSONViewerProps";
import JsonView from "@uiw/react-json-view";
import { vscodeTheme } from "@uiw/react-json-view/vscode";

export function preview(props: CiphixJSONViewerPreviewProps): ReactElement {
    const example = {
        string: "Lorem ipsum dolor sit amet",
        integer: 42,
        float: 114.514,
        null: null,
        undefined,
        timer: 0,
        date: new Date("Tue Sep 13 2022 14:07:44 GMT-0500 (Central Daylight Time)"),
        array: [19, 100.86, "test", NaN, Infinity],
        nestedArray: [
            [1, 2],
            [3, 4]
        ],
        object: {
            "first-child": true,
            "second-child": false,
            "last-child": null
        },
        string_number: "1234"
    };
    return (
        <JsonView
            value={example}
            displayDataTypes={props.displayDataTypes}
            displayObjectSize={props.displayObjectSize}
            indentWidth={props.indentWidth ? props.indentWidth : 30}
            enableClipboard={props.enableClipboard}
            collapsed={props.collapseNodes === true && props.collapseNodeLevel ? props.collapseNodeLevel : undefined}
            shortenTextAfterLength={
                props.shortenText && props.shortenTextAfterLength ? props.shortenTextAfterLength : 0
            }
            style={props.theme === "vscode" ? vscodeTheme : undefined}
        />
    );
}
