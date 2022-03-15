import React from 'react';
import styles from './Button.module.scss'

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    label,
    type,
    onClick,
    link,
    linkTarget,
    reversed,
    ...props
}) => {

    const theme = reversed ? styles.reversed : '';

    return (
        <div className={theme}>
            {
                type == 'callback' ?
                <div onClick={(e) => onClick(e)} className={styles.btn}>
                    { label }      
                </div> :
                <div className={styles.btn}>
                    <a href={link} target={linkTarget}>{ label }</a>  
                </div>
            }
        </div>
    );
}