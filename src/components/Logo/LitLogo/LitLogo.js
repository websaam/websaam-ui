import '../../../styles.css'
import logo from './lit-logo.png'
import { useState } from 'react';

export const LitLogo = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="lit flex justify-center">
            <div className='relative w-6 h-6 my-auto'>
                <img src={logo} alt="Lit Protocol"/>
            </div>
            <div className='flex justify-center pl-2'>
                <h1 className='text-xl text-white m-auto'>
                    <span className="md:text-base text-sm ml-[2px]">Lit Protocol</span>
                    <span className="md:text-base text-sm ml-2 text-grey-text font-extralight">Gather Spaces</span>
                </h1>
            </div>
        </div>
    );
}