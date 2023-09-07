import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className="w-full flex flex-1 justify-between items-center">
        <Link href="/">
            <img src="/assets/logos/logo.png" className="" alt='logobrand' />
        </Link>
        
        <nav>
            <ul className="flex flex-1 space-x-[30px] justify-end items-center text-xl/[30px] font-medium text-white">
                <li>
                    <Link className="" href="/">Website</Link>
                </li>
                <li>
                    <Link className="" href="/">Mobile Apps</Link>
                </li>
                <li>
                    <Link className="" href="/">Portfolio</Link>
                </li>
                <li>
                    <button className="rounded-[29px] bg-btn py-[11px] px-[20px]">Make an App</button>
                </li>
            </ul>
        </nav>
    </div>
  )
}
