import React from 'react';
import { Space as AntSpace } from 'antd';

const Space = ({
    children,
    direction = 'horizontal',
    size = 'middle',
    align = 'center',
    className = '',
    ...props
}) => {
    const directionClasses = {
        horizontal: 'flex-row',
        vertical: 'flex-col'
    };

    const sizeClasses = {
        small: 'gap-2',
        middle: 'gap-4',
        large: 'gap-6'
    };

    const alignClasses = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        baseline: 'items-baseline'
    };

    return (
        <AntSpace
            direction={direction}
            size={size}
            align={align}
            className={`flex ${directionClasses[direction]} ${sizeClasses[size]} ${alignClasses[align]} ${className}`}
            {...props}
        >
            {children}
        </AntSpace>
    );
};

export default Space; 