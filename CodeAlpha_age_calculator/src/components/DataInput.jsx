import React from 'react'

const DataInput= ({label,min,max,placeholder,onChange,value}) =>{
  return (
    <div className='flex flex-col space-y-2'>
        <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>
            {label}
        </label>

        <input
            type='number'
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            min={min}
            max={max}
            placeholder={placeholder}
            className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent tansition-all duration-200 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50 dark:border-gray-600 dark:text-white'/>

    </div>
  )
}

export default DataInput