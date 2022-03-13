import React from 'react'
import { storiesOf } from '@storybook/react'
import { LitLogo } from '../components/Logo/LitLogo.js';


const stories = storiesOf('Logo', module)

stories.add('LitLogo', () => {
    return (<LitLogo/>);
})