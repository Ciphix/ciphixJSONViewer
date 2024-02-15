import { ReactElement, createElement } from "react";
import { BizzomateJSONViewerPreviewProps } from "../typings/BizzomateJSONViewerProps";

export function preview({ emptyMessage }: BizzomateJSONViewerPreviewProps): ReactElement {
    return <span>{emptyMessage}</span>;
}

export function getPreviewCss(): string {
    return require("./ui/BizzomateJSONViewer.css");
}
