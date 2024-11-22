import { ReactElement, createElement, useEffect, useState } from "react";
import JsonView from "@uiw/react-json-view";

import { CiphixJSONViewerContainerProps } from "../typings/CiphixJSONViewerProps";

export function CiphixJSONViewer(props: CiphixJSONViewerContainerProps): ReactElement {
    const [jsonValue, setJsonValue] = useState<JSON | undefined>();
    const [emptyValue, setEmptyMesage] = useState<string | undefined>();

    // Get and parse the actual JSON
    useEffect(() => {
        if (props.jsonString?.value) {
            setJsonValue(JSON.parse(props.jsonString.value));
        } else {
            setJsonValue(undefined);
        }
    }, [props.jsonString?.value]);

    // Get the empty message
    useEffect(() => {
        if (props.emptyMessage?.value) {
            setEmptyMesage(props.emptyMessage.value);
        } else {
            setEmptyMesage(undefined);
        }
    }, [props.emptyMessage?.value]);

    // Render the content
    if (jsonValue) {
        return (
            <JsonView
                value={jsonValue}
                displayDataTypes={props.displayDataTypes}
                displayObjectSize={props.displayObjectSize}
                indentWidth={props.indentWidth}
                enableClipboard={props.enableClipboard}
                collapsed={props.collapsed > 0 ? props.collapsed : undefined}
                shortenTextAfterLength={props.shortenTextAfterLength}
            />
        );
    } else {
        return <span>{emptyValue}</span>;
    }
}
