// MeuComponente.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CardSelectRegistration } from './CardSelectRegistration';

export default {
    title: 'Molecules/CardSelectRegistration',
    component: CardSelectRegistration,
} as Meta;

const Template: Story = () => <CardSelectRegistration name="Alyson Daniel da Conceicao Santos" />;

export const Default = Template.bind({});

const CheckedTemplate: Story = () => <CardSelectRegistration name="Alyson Daniel da Conceicao Santos" checked />;
export const Checked = CheckedTemplate.bind({});