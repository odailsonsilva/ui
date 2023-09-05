import React from 'react'
import { TextField as TextFieldMUI, TextFieldProps as TextFieldPropsMUI } from '@mui/material'

export const TextField = (props: TextFieldPropsMUI) => {
    return (
        <TextFieldMUI
            size="small"
            inputProps={{ maxLength: 12 }}
            fullWidth
            {...props}
        />
    )
}