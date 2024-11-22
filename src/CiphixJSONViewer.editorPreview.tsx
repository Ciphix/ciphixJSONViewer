import { ReactElement, createElement } from "react";
import { CiphixJSONViewerPreviewProps } from "../typings/CiphixJSONViewerProps";

export function preview(props: CiphixJSONViewerPreviewProps): ReactElement {
    return <span>{props.emptyMessage}</span>;
}
