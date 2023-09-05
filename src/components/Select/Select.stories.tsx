// MeuComponente.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Select } from './Select';

export default {
    title: 'Atoms/Select',
    component: Select,
} as Meta;

const Template: Story = () => (
    <Select
        label="Informe o número de inscrição"
        options={[{ value: 1, label: 'x' }]}
    />
)

export const Default = Template.bind({});