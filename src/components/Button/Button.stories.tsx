// MeuComponente.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from './Button';

export default {
    title: 'Atoms/Button',
    component: Button,
} as Meta;

const Template: Story = () => <Button>Emitir Declaração</Button>;

export const BasicButton = Template.bind({});