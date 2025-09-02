import React from 'react'
import DataInput from './DataInput'

const InputForm=({birthDate, onInputChange, currentYear}) =>{
  return (
    <div className='grid md:grid-cols-3 gap-6 mb-8'>

        <DataInput
            label='Day'
            value={birthDate.day}
            onChange={(value)=> onInputChange('day', value)}
            min='1'
            max='31'
            placeholder='DD'/>

        <DataInput
            label='Month'
            value={birthDate.Month}
            onChange={(value)=> onInputChange('month', value)}
            min='1'
            max='12'
            placeholder='MM'/>


        <DataInput
            label='Year'
            value={birthDate.year}
            onChange={(value)=> onInputChange('year', value)}
            min='1900'
            max={currentYear.toString()}
            placeholder='YYYY'/>
    </div>
  )
}

export default InputForm