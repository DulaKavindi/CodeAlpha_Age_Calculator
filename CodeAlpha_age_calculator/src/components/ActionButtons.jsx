import { Calendar, Clock, User } from 'lucide-react'
import React from 'react'

const ActionButtons=({onCalculate, isCalculating, onReset})=> {
  return (
    <div className='flex flex-col sm:flex-row gap-4 mb-8'>

        <button
            onClick={onCalculate}
            disabled={isCalculating}
            className='flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled-transform-none flex items-center justify-center space-x-2'>

                {isCalculating ? (
                <>
                    <Clock className='w-5 h-5 animate-spin'/>
                    <span>Calculating ....</span>
                </>
                ):(
                    <>
                    <Calendar className='w-5 h-5'/>
                    <span>Calculate Age</span>
                    </>
                )
                }
            </button>

            <button
                onClick={onReset}
                className='sm:w-auto px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2'>

                    <User className='w-5 h-5'/>
                    <span>Reset</span>
                </button>
    </div>
  )
}

export default ActionButtons