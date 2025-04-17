import React from 'react';
import { Avatar as AntAvatar, Badge } from 'antd';

const Avatar = ({
    src,
    size = 'default',
    shape = 'circle',
    status,
    className = '',
    ...props
}) => {
    const sizeClasses = {
        small: 'w-8 h-8',
        default: 'w-10 h-10',
        large: 'w-12 h-12'
    };

    const avatar = (
        <AntAvatar
            src={src}
            size={size}
            shape={shape}
            className={`${sizeClasses[size]} ${className}`}
            {...props}
        />
    );

    if (status) {
        return (
            <Badge status={status}>
                {avatar}
            </Badge>
        );
    }

    return avatar;
};

export default Avatar; 