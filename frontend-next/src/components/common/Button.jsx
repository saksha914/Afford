import React from 'react';
import { Button as AntButton } from 'antd';

const Button = ({
    children,
    type = 'default',
    size = 'middle',
    icon,
    className = '',
    ...props
}) => {
    const buttonClasses = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white',
        default: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
        dashed: 'border-dashed border-2',
        text: 'hover:bg-gray-100',
        link: 'text-blue-500 hover:text-blue-600'
    };

    return (
        <AntButton
            type={type}
            size={size}
            icon={icon}
            className={`${buttonClasses[type]} ${className}`}
            {...props}
        >
            {children}
        </AntButton>
    );
};

export default Button; 