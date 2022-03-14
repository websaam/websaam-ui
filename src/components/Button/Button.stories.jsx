import React from 'react';
import { Button } from './Button';

export default{
    title: 'Components/Button',
    component: Button,
}

const Template = (args) => <Button {...args} />;

// export const ReactLink = Template.bind({});
// ReactLink.args = {
//     label: 'Button',
//     type: 'react-link',
// }

export const Link = Template.bind({});
Link.args = {
    label: 'Button',
    type: 'link',
    link: 'https://google.com',
    linkTarget: '_blank',
}

export const Callback = Template.bind({});
Callback.args = {
    label: 'Button',
    type: 'callback',
    onClick: (e) => {console.log(e)}
}

export const Reversed = Template.bind({});
Reversed.args = {
    label: 'Button',
    type: 'callback',
    reversed: true,
    onClick: (e) => {console.log(e)}
}