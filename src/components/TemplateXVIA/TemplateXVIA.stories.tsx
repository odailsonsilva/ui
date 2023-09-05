// MeuComponente.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TemplateXVIA } from './TemplateXVIA';
import { TextField } from '../TextField/TextField';
import { Box } from '@mui/material';

export default {
    title: 'Containers/TemplateXVIA',
    component: TemplateXVIA,
} as Meta;

const Template: Story = () => (
    <TemplateXVIA
        errorMessage='xxx'
        title="Consultar Frequência Escolar"
        description='Aqui você terá acesso às suas presenças e faltas referente ao ano letivo que você está matriculado. Para que você possa acompanhar o seu desempenho como aluno mês a mês.'
        moduleName='frequência escolar'
        onChange={(student) => console.log(student)}
        value={'1'}
        isLoading={false}
        studens={
            [
                { name: 'Alyson Daniel da Conceicao Santos', value: 1 },
                { name: 'Adyson Gabriel da Conceicao Santos', value: 2 },
                { name: 'Adyson Gabriel da Conceicao Santos', value: 3 },
                { name: 'Adyson Gabriel da Conceicao Santos', value: 4 },
                { name: 'Adyson Gabriel da Conceicao Santos', value: 5 },
                { name: 'Adyson Gabriel da Conceicao Santos', value: 6 },
            ]
        }
        isResposable
    >
        <Box width={280}>
            <TextField
                label="Informe o número de inscrição"
            />
        </Box>
    </TemplateXVIA>
)

export const Default = Template.bind({});