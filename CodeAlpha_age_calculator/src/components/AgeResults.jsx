import React from 'react'
import ResultCard from './ResultCard';
import { Cake, Calendar, Clock } from 'lucide-react';


const AgeResults = ({ result }) => {
    if (!result) return null;

  return (
    <div className='animate-fadeIn'>
        <h2 className='text-2xl font-bold text-white text-center mb-6'> Your Age </h2>

        <div className='grid md:grid-cols-3 gap-6'>

            <ResultCard
                icon={Calendar}
                label='Years'
                value={result.years}
                color='from-yellow-500 to-rose-600'/>

            <ResultCard
                icon={Clock}
                label='Months'
                value={result.months}
                color='from-blue-500 to-cyan-600'/>

            <ResultCard
                icon={Cake}
                label='Days'
                value={result.days}
                color='from-green-500 to-emerald-600'/>
        </div>

        {/*Show summary*/}

        <div className='mt-8 text-center'>
            <div className='bg-white/10 rounded-2xl p-6 backdrop-blur-sm'>
            
                <p className='text-white text-lg'>You are

                    <span className='font-bold text-yellow-300'> {result.years}</span> years,
                    <span className='font-bold text-yellow-300'> {result.months}</span> months, and
                    <span className='font-bold text-yellow-300'> {result.days}</span> days old !!
                </p>
            
            </div>
        </div>
    </div>
  )
}

export default AgeResults