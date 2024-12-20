import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-white relative mb-5'>
        <MaxWidthWrapper>
            <div className='border-t border-gray-200'/>
            <div className='h-full flex justify-center md:text-left pb-2 md:pb-0'>
                <p className=' text-sm text-muted-foreground my-5'>
                    &copy;{new Date().getFullYear()} All rights reserved</p>
            </div>
            <div className='flex items-center justify-center'>
                <div className='flex space-x-8'>
                    <Link href="#" className='text:sm text-muted-foreground hover:text-gray-600'>
                    Terms
                    </Link>
                    <Link href="#" className='text:sm text-muted-foreground hover:text-gray-600'>
                    Privacy Policy
                    </Link>
                    <Link href="#" className='text:sm text-muted-foreground hover:text-gray-600'>
                    Cookie Policy
                    </Link>
                </div>
            </div>
        </MaxWidthWrapper>
    </footer>
  )
}

export default Footer