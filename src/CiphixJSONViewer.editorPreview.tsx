import { ReactElement, createElement } from "react";
import { CiphixJSONViewerPreviewProps } from "../typings/CiphixJSONViewerProps";
import CSS from "csstype";

const bracketStyle: CSS.Properties = { color: "#236a7c" };
const nameStyle: CSS.Properties = { color: "#236a7c" };
const contentStyle: CSS.Properties = { color: "#cb4b16" };
const spacingStyle: CSS.Properties = { marginLeft: "15px" };

export function preview(props: CiphixJSONViewerPreviewProps): ReactElement {
    return (
        <div>
            <div>
                <span style={bracketStyle}>&#123;</span>
            </div>
            <div>
                <span style={spacingStyle} />
                <span style={nameStyle}>&quot;Data source&quot;</span>
                <span> : </span>
                <span style={bracketStyle}>&#123;</span>
            </div>
            <div>
                <span style={spacingStyle} />
                <span style={spacingStyle} />
                <span style={nameStyle}>&quot;JSON-String&quot;</span>
                <span> : </span>
                <span style={contentStyle}>&quot;{props.jsonString}&quot;</span>
                <span>,</span>
            </div>
            <div>
                <span style={spacingStyle} />
                <span style={spacingStyle} />
                <span style={nameStyle}>&quot;Empty message&quot;</span>
                <span> : </span>
                <span style={contentStyle}>&quot;{props.emptyMessage}&quot;</span>
                <span>,</span>
            </div>
            <div>
                <span style={spacingStyle} />
                <span style={bracketStyle}>&#125;</span>
            </div>
            <div>
                <span style={bracketStyle}>&#125;</span>
            </div>
        </div>
    );
}
