import React from 'react'

const ErrorMessage=({error})=> {

    if (!error) return null;

  return (
    <div className='mb-8 p-4 bg-red-500/20 border border-red-500-50 rounded-xl'>
        
        <p className='text-red-200 text-center font-medium'>{error}</p>
    
    </div>
  )
}

export default ErrorMessage