import styles from './LitLogo.module.scss'
import logo from './lit-logo.png'

export const LitLogo = ({title, subtitle, cursorPointer, onClick}) => {

    // -- prepare params
    const _title = title ?? 'Lit Protocol';
    const _subtitle = subtitle ?? 'Lorem Ipsum';
    const _cursorPointer = cursorPointer ?? false;

    return (
        <div onClick={onClick} className={`${styles.lit} ${_cursorPointer ? styles.cursorPointer : ''}`}>
            <div>
                <img src={logo} alt="Lit Protocol"/>
            </div>
            <div>
                <h1>
                    <span>{ _title }</span>
                    <span>{ _subtitle }</span>
                </h1>
            </div>
        </div>
    );
}