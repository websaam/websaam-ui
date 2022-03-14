import styles from './InputText.module.scss'
import { useState } from 'react';

export const InputText = ({
    required=true,
    label='1. Lorem ipsum',
    placeHolder='type your text here...',
    instructionType='toggle', //toggle or link
    instruction={
        link: '#',
        linkTargetBlank: false,
        linkText: 'Instructions',
        toggleTextShow: 'show instructions',
        toggleTextHide: 'hide instructions',
        toggleContent: 'your content here...'
    },
    onChange,
}) => {

    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState('');

    const toggleText = (e) => {
        e.target.innerText = toggle ? instruction.toggleTextShow : instruction.toggleTextHide;

        setToggle( !toggle );
    }

    return (
        <>
            {/* Label */}
            <div className={styles.label}>
                { label }
                { required ? <span>*</span> : ''}
                {
                    instructionType == 'link' ? 
                    <a href={instruction.link} target={instruction.linkTargetBlank ? '_blank' : ''}>{instruction.linkText}</a> : 
                    ''
                }
                {
                    instructionType == 'toggle' ? 
                    <>
                        <a onClick={(e) => toggleText(e)}>{ instruction.toggleTextShow }</a>
                        {
                            toggle ? 
                            <div>
                                { instruction.toggleContent }
                            </div> :
                            ''
                        }
                    </> : 
                    ''
                }

            </div>
            {/* Input */}
            <div className={styles.input}>
                <input onChange={(e) => onChange(e)} placeholder={placeHolder} type="text" />
            </div>
        </>
    );
}