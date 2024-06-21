import { background } from 'native-base/lib/typescript/theme/styled-system';
import React from 'react';

const VerticalLine = () => {
    const lineStyle = {
        borderLeft: '1px solid black', // couleur et épaisseur de la ligne
        height: '100px',
        backgroundColor : '#ff6b63' // hauteur de la ligne
    };

    return (
        <div style={lineStyle}></div>
    );
}

export default VerticalLine;
