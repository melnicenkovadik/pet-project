import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ErrorMsg } from './ErrorMsg';

export default {
    title: 'shared/ErrorMsg',
    component: ErrorMsg,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ErrorMsg>;

const Template: ComponentStory<typeof ErrorMsg> = (args) => <ErrorMsg {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    error: 'Error message',
};

export const Empty = Template.bind({});
Empty.args = {
    error: '',
};

export const Null = Template.bind({});
Null.args = {
    error: null,
};

export const Undefined = Template.bind({});
Undefined.args = {
    error: undefined,
};

export const LongText = Template.bind({});
LongText.args = {
    error: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        + ' Nulla vel nunc et nunc aliquam luctus. Donec id odio vel libero '
        + 'tincidunt tincidunt nec nec libero',
};

export const WithHtml = Template.bind({});
WithHtml.args = {
    error: '<b><i><u>Error message</u></i></b>',
};
