import Image from 'next/image';
import Server from '@/public/asserts/server.svg';

const ServerError = () => {
    return (
        <div className='flex justify-center items-center'>
            <div>
                <Image width={400} height={388} src={Server} className='sm:w-[304px] w-[400px] h-[388px] sm:h-[294px]' alt='Server Error' />
                <h1 className='text-[32px] sm:text-[24px] font-[600] text-primary-900 mt-4 text-center'>Something went wrong</h1>
            </div>
        </div>
    );
}

export default ServerError;