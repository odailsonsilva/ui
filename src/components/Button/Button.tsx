import React from 'react';
import { Button as ButtonMaterial, ButtonProps as ButtonPropsMaterial } from '@mui/material';

interface ButtonProps extends ButtonPropsMaterial {

}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'contained',
    color = 'primary',
    ...rest
}) => {
    return (
        <ButtonMaterial variant={variant} color={color} {...rest}>
            {children}
        </ButtonMaterial>
    );
};
