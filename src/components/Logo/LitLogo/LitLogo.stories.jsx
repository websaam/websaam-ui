import React from 'react'
import { LitLogo } from './LitLogo';

export default {
    title: 'Logo/LitLogo',
    component: LitLogo
}

const Template = (args) => <LitLogo {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Lit Protocol",
    subtitle: "Lorem Ipsum",
    cursorPointer: true,
    onClick: () => {alert("Testing!")},
}