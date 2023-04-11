import React from 'react';

const StyleSweep = (props) => {
  return (
        <div className="separator">
            
            <svg className="separator__svg" width="100%" height={props.height} viewBox="0 0 100 100" preserveAspectRatio="none" fill={props.color1} version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradient">
                    <stop offset="5%" stop-color={props.color1} />
                    <stop offset="95%" stop-color={props.color2} />
                </linearGradient>
            </defs>
            <path d="M 100 100 V 10 L 0 100"/>
            <path d="M 30 73 L 100 18 V 10 Z" fill="url(#gradient)" strokeWidth="0"/>
            </svg>
        </div>
  );
}

export default StyleSweep;