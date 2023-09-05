import { Box, Grid, Typography } from '@mui/material'
import { styled } from '../../styles/styled'
import { Colors } from '../../styles'

export const Wrapper = styled(Box)(({ theme }) => ({
    padding: 16
}))

export const Header = styled<any>(Box)(({ isMobile }) => ({
    borderBottom: !isMobile ? '1px solid rgba(115, 115, 115, 0.5)' : '',
    marginBottom: 20
}))

export const Title = styled<any>(Typography)(({ isMobile }) => ({
    fontSize: !isMobile ? 24 : 16,
    color: Colors.AZUL_GOV,
    fontWeight: 700,
    marginBottom: !isMobile ? 20 : 0
}))

export const Description = styled(Typography)(({ theme }) => ({
    paddingBottom: 20,
    fontSize: 14
}))

export const ContentSelectStudent = styled<any>(Box)(({ isMobile }) => ({
    padding: !isMobile ? 32 : 0
}))

export const GridStudents = styled<any>(Box)(({ isMobile }) => ({
    marginBottom: 40,
    display: 'grid',
    gridTemplateColumns: !isMobile ? 'repeat(auto-fill, minmax(200px, 1fr))' : 'repeat(auto-fill, minmax(160px, 1fr))',
    gap: !isMobile ? 15 : 8,
    justifyItems: 'center'
}))


export const DescriptionSelectStudent = styled(Typography)(({ theme }) => ({
    fontSize: 16,
    marginBottom: 20
}))
