import React from 'react';
import { Tooltip } from "bootstrap";
const { useEffect, useRef } = React

const ToolTip = (props) => {
    const tooltipRef = useRef();  

    useEffect(() => {
        new Tooltip(tooltipRef.current, {
            title: props.text,
            placement: 'bottom',
            trigger: 'hover'
        })
    })
    
    return (
        <div ref={tooltipRef}>
            {props.children}
        </div>
    )
}

export default ToolTip