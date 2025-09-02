import { Cake } from 'lucide-react'
import React from 'react'

const Header=({}) => {
  return (
    <div className='text-center mb-8'>
        <div className='flex justify-center mb-4'>
            <div className='p-4 bg-white/10 rounded-full backdrop-blur-sm'>
                <Cake className='w-12 h-12 text-white'/>
            </div>
        </div>

        <h1 className='text-4xl md:text-5xl font-bold text-white mb-2'> Age Calculator</h1>

        <p className='text-white/80 text-lg'>Discover your exact age in years, months and days.</p>
    </div>
  )
}

export default Header