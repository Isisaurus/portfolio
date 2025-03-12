import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className='w-full min-h-16 px-3 md:px-6 py-6'>
        <nav>
            <ul className='flex justify-between items-center'>
                <li>
                    <Link href={"/"} className='font-semibold text-neutral-500 hover:text-neutral-700'>
                        <span className='uppercase tracking-wider '>Diana Vitanyi</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/contact"} type='button' className='button'>
                        <span>Contact me</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar