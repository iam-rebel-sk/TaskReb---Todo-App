import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[rgb(42,0,88)] text-white py-3 px-10 ">
        <div className="logo">
            <span className='cursor-pointer font-bold text-xl text-orange-500'>Task</span><span className='font-bold text-xl text-blue-600'>Reb</span>
        </div>
        <div className="items">
            <ul className="flex gap-8">
                <li className='cursor-pointer hover:font-bold transition-all duration-150'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all duration-150'>Your Tasks</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
