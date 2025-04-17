import React from 'react';
import { Tag as AntTag } from 'antd';

const Tag = ({
    children,
    color,
    closable = false,
    className = '',
    ...props
}) => {
    const colorClasses = {
        blue: 'bg-blue-100 text-blue-800 border-blue-200',
        green: 'bg-green-100 text-green-800 border-green-200',
        red: 'bg-red-100 text-red-800 border-red-200',
        yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        purple: 'bg-purple-100 text-purple-800 border-purple-200',
        default: 'bg-gray-100 text-gray-800 border-gray-200'
    };

    return (
        <AntTag
            color={color}
            closable={closable}
            className={`rounded-full px-3 py-1 text-sm font-medium border ${colorClasses[color] || colorClasses.default} ${className}`}
            {...props}
        >
            {children}
        </AntTag>
    );
};

export default Tag; 