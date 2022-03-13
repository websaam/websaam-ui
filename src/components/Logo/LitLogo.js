import '../../styles.css'
import { useState } from 'react';

export const LitLogo = () => {

    const [count, setCount] = useState(0);

    return (
        <div className='logo-lit' onClick={() => setCount(count+1)}>
            LitLogo: { count }
        </div>
    );
}