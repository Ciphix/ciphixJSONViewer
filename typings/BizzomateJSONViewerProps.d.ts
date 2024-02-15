/**
 * This file was generated from BizzomateJSONViewer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { DynamicValue, EditableValue } from "mendix";

export interface BizzomateJSONViewerContainerProps {
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

export interface BizzomateJSONViewerPreviewProps {
    readOnly: boolean;
    jsonString: string;
    emptyMessage: string;
    indentWidth: number | null;
    displayObjectSize: boolean;
    displayDataTypes: boolean;
    enableClipboard: boolean;
    shortenTextAfterLength: number | null;
    collapsed: number | null;
}
