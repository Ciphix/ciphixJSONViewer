/**
 * This file was generated from CiphixJSONViewer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { DynamicValue, EditableValue } from "mendix";

export interface CiphixJSONViewerContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    jsonString: EditableValue<string>;
    emptyMessage?: DynamicValue<string>;
    indentWidth: number;
    displayObjectSize: boolean;
    displayDataTypes: boolean;
    enableClipboard: boolean;
    shortenTextAfterLength: number;
    collapsed: number;
}

export interface CiphixJSONViewerPreviewProps {
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    jsonString: string;
    emptyMessage: string;
    indentWidth: number | null;
    displayObjectSize: boolean;
    displayDataTypes: boolean;
    enableClipboard: boolean;
    shortenTextAfterLength: number | null;
    collapsed: number | null;
}
