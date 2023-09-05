import React from 'react'
import { Box, Skeleton, Typography, useMediaQuery } from "@mui/material"

import * as S from './styles'
import { CardSelectRegistration } from '../CardSelectRegistration/CardSelectRegistration'

export interface TemplateXVIAParams {
    title: string
    description: string
    moduleName: string
    children: React.ReactNode
    isResposable: boolean
    studens: {
        name: string,
        value: string | number
    }[]
    onChange: (student: string) => void
    value: string
    isLoading: boolean
    errorMessage?: string
}

export const TemplateXVIA: React.FC<TemplateXVIAParams> = ({
    children,
    description,
    title,
    moduleName,
    isResposable = true,
    studens,
    onChange,
    value,
    isLoading,
    errorMessage = ''
}) => {
    const isMobile = useMediaQuery('(max-width:600px)')

    const handleChangeStudent = (student: string) => {
        onChange(student)
    }

    return (
        <S.Wrapper>
            <S.Header isMobile={isMobile}>
                <S.Title isMobile={isMobile}>{title}</S.Title>

                {!isMobile && <S.Description>{description}</S.Description>}
            </S.Header>

            <S.ContentSelectStudent isMobile={isMobile}>
                {isLoading ? (
                    <>
                        <Box marginBottom={'20px'}>
                            <Skeleton variant="rectangular" width={'100%'} height={24} />
                        </Box>

                        <S.GridStudents isMobile={isMobile}>
                            <Skeleton variant="rectangular" width={!isMobile ? 200 : 160} height={!isMobile ? 140 : 160} />
                            <Skeleton variant="rectangular" width={!isMobile ? 200 : 160} height={!isMobile ? 140 : 160} />
                            <Skeleton variant="rectangular" width={!isMobile ? 200 : 160} height={!isMobile ? 140 : 160} />
                            <Skeleton variant="rectangular" width={!isMobile ? 200 : 160} height={!isMobile ? 140 : 160} />
                            <Skeleton variant="rectangular" width={!isMobile ? 200 : 160} height={!isMobile ? 140 : 160} />
                            <Skeleton variant="rectangular" width={!isMobile ? 200 : 160} height={!isMobile ? 140 : 160} />
                            <Skeleton variant="rectangular" width={!isMobile ? 200 : 160} height={!isMobile ? 140 : 160} />
                            <Skeleton variant="rectangular" width={!isMobile ? 200 : 160} height={!isMobile ? 140 : 160} />
                        </S.GridStudents>

                        <Box>
                            <Box marginTop={1}>
                                <Skeleton variant="rectangular" width={'100%'} height={24} />
                            </Box>
                            <Box marginTop={1}>
                                <Skeleton variant="rectangular" width={'100%'} height={24} />
                            </Box>
                            <Box marginTop={1}>
                                <Skeleton variant="rectangular" width={'100%'} height={24} />
                            </Box>
                            <Box marginTop={1}>
                                <Skeleton variant="rectangular" width={'100%'} height={24} />
                            </Box>
                            <Box marginTop={1}>
                                <Skeleton variant="rectangular" width={'100%'} height={24} />
                            </Box>
                        </Box>
                    </>
                ) : (
                    <>
                        {errorMessage ? (
                            <Typography>{errorMessage}</Typography>
                        ) : (
                            <>
                                <S.DescriptionSelectStudent>
                                    Selecione o aluno que deseja consultar a {moduleName}
                                </S.DescriptionSelectStudent>

                                {isResposable && (
                                    <S.GridStudents isMobile={isMobile}>
                                        {studens.map((item) => (
                                            <CardSelectRegistration
                                                name={item.name}
                                                checked={String(item.value) === value}
                                                onClick={() => handleChangeStudent(String(item.value))}
                                            />
                                        ))}
                                    </S.GridStudents>
                                )}


                                <Box marginTop="20px">
                                    {children}
                                </Box>
                            </>
                        )}
                    </>
                )}

            </S.ContentSelectStudent>
        </S.Wrapper>
    )
}