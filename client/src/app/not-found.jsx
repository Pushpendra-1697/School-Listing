'use client';
import React from 'react'
import EmptyState from '@/src/components/EmptyState';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const NotFound = () => {
  const searchParams = useSearchParams();
  const message = searchParams.get('error');
  return (
    <div>
      <div className='flex justify-center items-center mt-24'><EmptyState /></div>
      <p className='mt-4 mb-4 text-center'>Go back to the <Link prefetch={true} className='underline text-primary-400' href={'/'}>Dashboard</Link></p>
      <p className='mt-4 mb-4 text-center'>{message && message}</p>
    </div>
  );
}

export default NotFound;