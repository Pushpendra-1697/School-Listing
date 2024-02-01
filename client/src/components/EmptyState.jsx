import Image from 'next/image';
import State from '@/public/asserts/state.svg';

const EmptyState = () => {
    return (
        <div className='flex justify-center items-center'>
            <div>
                <Image src={State} width={400} height={358} className='sm:w-[304px] w-[400px] h-[358px] sm:h-[272px]' alt='State Empty' />
                <h1 className='text-[32px] sm:text-[24px] font-[600] text-primary-900 mt-4 text-center'>Page Not found</h1>
            </div>
        </div>
    );
}

export default EmptyState;