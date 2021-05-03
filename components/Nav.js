import React from 'react'
import { useRouter } from 'next/router'

import requests from '../util/requests'

const Nav = () => {

    const Router = useRouter();

    return (
        <nav className="relative">    
            <div className="flex ml-10 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-auto overflow-y-hidden scrollbar-hide ">
                {Object.entries(requests).map( ([key, { title, url }]) => (
                    <h2 
                        key={key}
                        onClick={() => Router.push(`/?genre=${key}`)}
                        className="p-4 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white last:pr-20 active:text-blue-300"
                    >
                        {title}
                    </h2>
                ) )}
            </div>
            <div className="absolute top-0 right-0  bg-gradient-to-l from-[#06202A] h-full w-1/12"></div>
        </nav>
    )
}

export default Nav
