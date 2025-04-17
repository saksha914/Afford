import React from 'react';
import { Typography as AntTypography } from 'antd';

const { Title: AntTitle, Text: AntText, Paragraph: AntParagraph, Link: AntLink } = AntTypography;

export const Title = ({ level = 1, children, className = '', ...props }) => (
    <AntTitle
        level={level}
        className={`${className}`}
        {...props}
    >
        {children}
    </AntTitle>
);

export const Text = ({ type, children, className = '', ...props }) => (
    <AntText
        type={type}
        className={`${className}`}
        {...props}
    >
        {children}
    </AntText>
);

export const Paragraph = ({ children, className = '', ...props }) => (
    <AntParagraph
        className={`${className}`}
        {...props}
    >
        {children}
    </AntParagraph>
);

export const Link = ({ children, className = '', ...props }) => (
    <AntLink
        className={`text-blue-500 hover:text-blue-600 ${className}`}
        {...props}
    >
        {children}
    </AntLink>
); 