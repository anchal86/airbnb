import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()

    function matchRoute(route){
        if(route===location.pathname){
            return true
        }
    }
  
    return (
    <>
        <div className='bg-white border-b shadow-sm'>
            <header className='flex justify-between items-center px-8 max-w-6xl mx-auto'>
                <div className=''>
                    <img src={`/airbnb.png`}
                    className='h-16'
                    onClick={()=>navigate('/')}
                    />
                </div>
                <div className=''>
                    <ul className='flex space-x-10'>
                        <li
                            className={`text-sm py-5 font-semibold text-gray-400
                            border-b-[3px] border-b-transparent cursor-pointer
                            ${matchRoute('/') && 'text-black border-b-red-600'}
                            `}
                            onClick={()=>navigate('/')}
                        >
                            Home
                        </li>
                        
                        <li
                            className={`text-sm py-5 font-semibold text-gray-400
                            border-b-[3px] border-b-transparent cursor-pointer
                            ${matchRoute('/airbnb-home') && 'text-black border-b-red-600'}
                            `}

                            onClick={()=>navigate('/airbnb-home')}
                        >
                            Airbnb Home
                        
                        </li>
                        
                        <li
                            className={`text-sm py-5 font-semibold text-gray-400
                            border-b-[3px] border-b-transparent cursor-pointer
                            ${matchRoute('/sign-in') && 'text-black border-b-red-600'}
                            `}
                            onClick={()=>navigate('/sign-in')}
                        >
                            Sign In
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    </>
  )
}
