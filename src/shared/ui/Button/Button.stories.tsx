import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ThemeButton.OUTLINE,
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ThemeButton.OUTLINE,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
    children: '>',
    theme: ThemeButton.OUTLINE,
    square: true,
    size: ButtonSize.XL,
};
// disabled
export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    disabled: true,
};
// disabled
export const DisabledClear = Template.bind({});
DisabledClear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
    disabled: true,
};
// disabled
export const DisabledClearInverted = Template.bind({});
DisabledClearInverted.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR_INVERTED,
    disabled: true,
};
// disabled
export const DisabledOutline = Template.bind({});
DisabledOutline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    disabled: true,
};
// disabled
export const DisabledOutlineDark = Template.bind({});
DisabledOutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
    disabled: true,
};

export const DisabledSquare = Template.bind({});
DisabledSquare.args = {
    children: '>',
    theme: ThemeButton.OUTLINE,
    square: true,
    disabled: true,
};
