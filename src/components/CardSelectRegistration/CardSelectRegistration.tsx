import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'

import { styled } from '../../styles/styled'
import { AvatarIcon } from '../../assets/icons/AvatarIcon'

interface CardSelectRegistrationParams {
    name: string
    checked?: boolean
    onClick?: () => void
}

const ButtonUser = styled<any>(Box)(({ checked, isMobile }) => ({
    background: checked ? 'rgba(181, 216, 255, 1)' : '#fff',
    borderRadius: !isMobile ? 5 : 24,
    maxWidth: !isMobile ? '200px' : '160px',
    height: 160,
    padding: 10,
    boxShadow: checked ? '1px 1px 4px 0px rgba(0, 0, 0, 0.25)' : '2px 2px 8px 0px rgba(0, 0, 0, 0.25)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: checked ? 'rgba(224, 227, 235, 1)' : 'rgba(115, 115, 115, 0.4)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transtion: 'all 0.2s',
    '&:hover': {
        border: '2px solid rgba(22, 65, 148, 0.8)',
    }
}))

const Text = styled<any>(Typography)(({ isMobile }) => ({
    textAlign: 'center',
    fontSize: !isMobile ? 16 : 14,
    fontWeight: 400,
    marginTop: 20
}))

export const CardSelectRegistration: React.FC<CardSelectRegistrationParams> = ({
    name,
    checked,
    onClick
}) => {
    const isMobile = useMediaQuery('(max-width:600px)')

    return (
        <ButtonUser checked={checked} onClick={onClick} isMobile={isMobile}>
            <div>
                <AvatarIcon />
            </div>
            <Text isMobile={isMobile}>{name}</Text>
        </ButtonUser>
    )
}