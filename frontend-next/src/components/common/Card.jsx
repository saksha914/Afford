import React from 'react';
import { Card as AntCard } from 'antd';
import { Title, Text } from './Typography';

const Card = ({
    title,
    subtitle,
    children,
    hoverable = false,
    className = '',
    ...props
}) => {
    return (
        <AntCard
            hoverable={hoverable}
            className={`rounded-lg shadow-sm hover:shadow-md transition-shadow ${className}`}
            {...props}
        >
            {title && (
                <div className="mb-4">
                    <Title level={4}>{title}</Title>
                    {subtitle && <Text type="secondary">{subtitle}</Text>}
                </div>
            )}
            {children}
        </AntCard>
    );
};

export default Card; 