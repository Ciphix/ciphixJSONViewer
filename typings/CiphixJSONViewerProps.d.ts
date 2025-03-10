/**
 * This file was generated from CiphixJSONViewer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { DynamicValue, EditableValue } from "mendix";

export type ThemeEnum = "default" | "vscode";

export interface CiphixJSONViewerContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    jsonString: EditableValue<string>;
    emptyMessage?: DynamicValue<string>;
    errorMessage?: DynamicValue<string>;
    indentWidth: number;
    displayObjectSize: boolean;
    displayDataTypes: boolean;
    enableClipboard: boolean;
    collapseNodes: boolean;
    collapseNodeLevel: number;
    shortenText: boolean;
    shortenTextAfterLength: number;
    theme: ThemeEnum;
}

export interface CiphixJSONViewerPreviewProps {
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    jsonString: string;
    emptyMessage: string;
    errorMessage: string;
    indentWidth: number | null;
    displayObjectSize: boolean;
    displayDataTypes: boolean;
    enableClipboard: boolean;
    collapseNodes: boolean;
    collapseNodeLevel: number | null;
    shortenText: boolean;
    shortenTextAfterLength: number | null;
    theme: ThemeEnum;
}
