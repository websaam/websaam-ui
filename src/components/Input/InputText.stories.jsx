import React from 'react';
import { InputText } from './InputText';

export default {
    title: 'Input/Text',
    component: InputText,
}

const Template = (args) => <InputText {...args} />;

export const Toggle = Template.bind({});
Toggle.args = {
    required: true,
    label:'1. Lorem ipsum',
    placeHolder:'type your text here...',
    instructionType:'toggle', //toggle or link
    instruction:{
        toggleTextShow: 'show instructions',
        toggleTextHide: 'hide instructions',
        toggleContent: 'your content here...'
    },
    onChange: (e) => console.log(e.target.value),
}

export const Link = Template.bind({});
Link.args = {
    required: true,
    label: '1. Lorem ipsum',
    placeHolder: 'type your text here...',
    instructionType: 'link', //toggle or link
    instruction:{
        link: '#',
        linkTargetBlank: false,
        linkText: 'Instructions',
    },
    onChange: (e) => console.log(e.target.value),
}