import React from 'react'
import StartButton from '../components/StartButton'

const StartPage=() =>{
  return (
    <div className='bg-blue-500'>
        <div className='text-center mb-8'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-2'>Age Calculator</h1>

            <h3>Welcome 🎉</h3>
            
            <p>Ready to discover your age in years, months, and days?
            Just enter your birthdate and let’s begin your journey through time!</p>
        </div>

        <StartButton/>
        
    </div>
  )
}

export default StartPage