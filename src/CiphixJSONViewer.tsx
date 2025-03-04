import { ReactElement, createElement, useEffect, useState } from "react";
import JsonView from "@uiw/react-json-view";
import { vscodeTheme } from "@uiw/react-json-view/vscode";

import { CiphixJSONViewerContainerProps } from "../typings/CiphixJSONViewerProps";

const parseJSON = (jsonString: string): JSON | undefined => {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

export function CiphixJSONViewer(props: CiphixJSONViewerContainerProps): ReactElement {
    const [jsonValue, setJsonValue] = useState<JSON | undefined>();
    const [jsonString, setJsonString] = useState<string | undefined>();
    const [emptyMessage, setEmptyMesage] = useState<string | undefined>();
    const [erroMessage, setErrorMesage] = useState<string | undefined>();

    // Get the JSON string from Mendix
    useEffect(() => {
        if (props.jsonString?.value) {
            setJsonString(props.jsonString.value);
            setJsonValue(parseJSON(props.jsonString.value));
        } else {
            setJsonString(undefined);
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

    // Get the error message
    useEffect(() => {
        if (props.errorMessage?.value) {
            setErrorMesage(props.errorMessage.value);
        } else {
            setErrorMesage(undefined);
        }
    }, [props.errorMessage?.value]);

    // Render the content
    if (jsonValue) {
        return (
            <JsonView
                value={jsonValue}
                displayDataTypes={props.displayDataTypes}
                displayObjectSize={props.displayObjectSize}
                indentWidth={props.indentWidth}
                enableClipboard={props.enableClipboard}
                collapsed={props.collapseNodes ? props.collapseNodeLevel : undefined}
                shortenTextAfterLength={props.shortenText ? props.shortenTextAfterLength : 0}
                style={props.theme === "vscode" ? vscodeTheme : undefined}
            />
        );
    } else if (jsonString) {
        return <div className={"alert alert-danger mx-validation-message"}>{erroMessage}</div>;
    } else {
        return <span>{emptyMessage}</span>;
    }
}
