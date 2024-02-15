import { ReactElement, createElement, useEffect, useState } from "react";
import JsonView from "@uiw/react-json-view";

import { BizzomateJSONViewerContainerProps } from "../typings/BizzomateJSONViewerProps";

import "./ui/BizzomateJSONViewer.css";

export function BizzomateJSONViewer({
    jsonString,
    displayDataTypes,
    displayObjectSize,
    indentWidth,
    collapsed,
    shortenTextAfterLength,
    emptyMessage,
    enableClipboard
}: BizzomateJSONViewerContainerProps): ReactElement {
    const [jsonValue, setJsonValue] = useState<JSON | undefined>();
    const [emptyValue, setEmptyMesage] = useState<string | undefined>();

    // Get and parse the actual JSON
    useEffect(() => {
        if (jsonString?.value) {
            setJsonValue(JSON.parse(jsonString.value));
        } else {
            setJsonValue(undefined);
        }
    }, [jsonString?.value]);

    // Get the empty message
    useEffect(() => {
        if (emptyMessage?.value) {
            setEmptyMesage(emptyMessage.value);
        } else {
            setEmptyMesage(undefined);
        }
    }, [emptyMessage?.value]);

    // Render the content
    if (jsonValue) {
        return (
            <JsonView
                value={jsonValue}
                displayDataTypes={displayDataTypes}
                displayObjectSize={displayObjectSize}
                indentWidth={indentWidth}
                enableClipboard={enableClipboard}
                collapsed={collapsed > 0 ? collapsed : undefined}
                shortenTextAfterLength={shortenTextAfterLength}
            />
        );
    } else {
        return <span>{emptyValue}</span>;
    }
}
