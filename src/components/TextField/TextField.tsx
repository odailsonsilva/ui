import React from 'react'
import { TextField as TextFieldMUI, TextFieldProps as TextFieldPropsMUI } from '@mui/material'

import { masks } from '../../utils/masks'

type TextFieldMasks = 'cpf' | 'number' | 'float' | 'phone';

export interface TextFieldParms {
    mask?: TextFieldMasks
}

export const TextField = ({ mask, onChange, value, ...props }: TextFieldParms & TextFieldPropsMUI) => {
    return (
        <TextFieldMUI
            size="small"
            fullWidth
            value={mask ? masks[mask].input(value) : value}
            onChange={(e) => {
                if (onChange) {
                    if (mask) {
                        return masks[mask].output(e, onChange)
                    }

                    return onChange(e)
                }
            }}
            {...props}
        />
    )
}