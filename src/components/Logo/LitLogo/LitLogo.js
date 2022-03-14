import '../../../styles.css'
import logo from './lit-logo.png'

export const LitLogo = ({title, subtitle}) => {

    const _title = title ?? 'Lit Protocol';
    const _subtitle = subtitle ?? 'Lorem Ipsum';

    return (
        <div className="lit flex justify-center">
            <div className='relative w-6 h-6 my-auto'>
                <img src={logo} alt="Lit Protocol"/>
            </div>
            <div className='flex justify-center pl-2'>
                <h1 className='text-xl text-white m-auto'>
                    <span className="md:text-base text-sm ml-[2px]">{ _title }</span>
                    <span className="md:text-base text-sm ml-2 text-grey-text font-extralight">{ _subtitle }</span>
                </h1>
            </div>
        </div>
    );
}