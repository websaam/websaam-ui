import '../../../styles.css'
import logo from './lit-logo.png'
import { useState } from 'react';

export const LitLogo = () => {

    const [count, setCount] = useState(0);

    return (
        <div className='logo-lit' onClick={() => setCount(count+1)}>
            <img src={logo} />
            LitLogo: { count }
        </div>
    );
}