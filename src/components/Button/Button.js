import React from 'react';
import styles from './Button.module.scss'
import PropTypes from 'prop-types';

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

Button.propTypes = {
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Type of action when the button is clicked
     */  
    type: PropTypes.oneOf(['link', 'callback']),
};

// Button.defaultProps = {
//     type: 'react-link', // react-link, link, callback
// };