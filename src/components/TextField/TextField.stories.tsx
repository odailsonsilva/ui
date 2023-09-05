// MeuComponente.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextField } from './TextField';

export default {
    title: 'Atoms/TextField',
    component: TextField,
} as Meta;

const Template: Story = () => <TextField label="Informe o número de inscrição" />;

export const Default = Template.bind({});