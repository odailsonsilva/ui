import React from 'react';
import {
    Box,
    InputLabel,
    Select as SelectMUI,
    FormControl,
    SelectProps as SelectPropsMUI,
    MenuItem
} from "@mui/material";

export interface SelectProps extends SelectPropsMUI {
    options: {
        value: string | number
        label: string
    }[]
    label: string
}

export const Select: React.FC<SelectProps> = ({
    options,
    label,
    ...rest
}) => {
    return (
        <Box style={{ width: '100%' }}>
            <FormControl sx={{ m: 1, minWidth: 160 }} fullWidth>
                <InputLabel>{label}</InputLabel>
                <SelectMUI
                    label={label}
                    {...rest}
                >
                    {options.map((month) => (
                        <MenuItem key={month.value} value={month.value}>
                            {month.label}
                        </MenuItem>
                    ))}
                </SelectMUI>
            </FormControl>
        </Box>
    )
}