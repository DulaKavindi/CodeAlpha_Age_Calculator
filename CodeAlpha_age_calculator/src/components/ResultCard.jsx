import React from 'react'

const ResultCard=({label, color, value, icon:Icon})=> {
  return (
    <div className={`bg-gradient-to-br ${color} p-6 rounded-2xl shadow-lg transforrm hover:scale-150 transition-all duration-300`}>
        <div className='flex item-center space-x-3'>
            <div className='p-3 bg-white/20 rounded-full'>
            <Icon className='w-6 h-6 text-white'></Icon>
            </div>

            <div>
                <p className='text-white/8- text-sm font-medium'>{label}</p>
                <p className='text-white text-2xl font-bold'>{value}</p>
            </div>
        </div>
    </div>
  )
}

export default ResultCard