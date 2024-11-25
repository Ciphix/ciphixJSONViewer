import { ReactElement, createElement } from "react";
import { CiphixJSONViewerPreviewProps } from "../typings/CiphixJSONViewerProps";
import CSS from "csstype";

const bracketStyle: CSS.Properties = {color:"#236a7c"}
const nameStyle: CSS.Properties = {color:"#236a7c"}
const contentStyle: CSS.Properties = {color:"#cb4b16"}
const spacingStyle: CSS.Properties = {marginLeft: "15px"}

export function preview(props: CiphixJSONViewerPreviewProps): ReactElement {
    return <div>
                <div><span style={bracketStyle}>&#123;</span></div>
                <div><span style={spacingStyle}/><span style={nameStyle}>"Data source"</span><span> : </span><span style={bracketStyle}>&#123;</span></div>
                <div><span style={spacingStyle}/><span style={spacingStyle}/><span style={nameStyle}>"JSON-String"</span><span> : </span><span style={contentStyle}>"{props.jsonString}"</span><span>,</span></div>
                <div><span style={spacingStyle}/><span style={spacingStyle}/><span style={nameStyle}>"Empty message"</span><span> : </span><span style={contentStyle}>"{props.emptyMessage}"</span><span>,</span></div>
                <div><span style={spacingStyle}/><span style={bracketStyle}>&#125;</span></div>
                <div><span style={bracketStyle}>&#125;</span></div>
        </div>;
}
