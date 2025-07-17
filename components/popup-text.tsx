import Link from 'next/link';
import React from 'react';

type PopupTextProps = {
    message: string;
    buttonText: string;
    url: string;
};

const PopupText: React.FC<PopupTextProps> = ({ message, buttonText, url }) => {
    return (
       <div className='popup fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] p-4'>
    <div className='bg-white p-4 sm:p-6 md:p-8 rounded-lg text-center w-full max-w-sm sm:max-w-md min-w-[280px] shadow-xl mx-4'>
        <div className='mb-6 text-base sm:text-lg md:text-xl leading-relaxed'>
            {message}
        </div>
        <Link
            href={url}
            className='w-full max-w-[200px] bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded transition-colors duration-200 text-sm sm:text-base'
        >
            {buttonText}
        </Link>
    </div>
</div>
    );
};

export default PopupText;