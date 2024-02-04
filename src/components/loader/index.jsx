import { Dna } from 'react-loader-spinner';
export default function Loader() {
    return (
        <div className='min-h-screen bg-lightTheme-secondary text-lightTheme-text dark:bg-darkTheme-secondary dark:text-darkTheme-text flex justify-center items-center'>
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"

            />
        </div>
    )
}
