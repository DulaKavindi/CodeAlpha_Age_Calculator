import { Play } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const StartButton=()=> {

    const navigate = useNavigate();

  return (
    <div className='flex flex-col sm:flex-row gap-4 mb-8'>

        <button
            onClick={()=> navigate ("/Calculator")}
            className='flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-8 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled-transform-none flex items-center justify-center space-x-2'>
                    
                <Play className='w-5 h-5'/>
                <span>Start</span>

            </button>

    </div>
  )
}

export default StartButton