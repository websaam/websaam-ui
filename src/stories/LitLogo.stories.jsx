import React from 'react'
import { LitLogo } from '../components/Logo/LitLogo/LitLogo';

export default {
    title: 'Logo/LitLogo',
    component: LitLogo
}

const Template = (args) => <LitLogo {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Lit Protocol",
    subtitle: "Lorem Ipsum",
}