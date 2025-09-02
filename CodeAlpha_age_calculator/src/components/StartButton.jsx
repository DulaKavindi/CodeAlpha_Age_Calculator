import { Play } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const StartButton=()=> {

    const navigate = useNavigate();

  return (
    <div className='flex flex-col sm:flex-row gap-4 mb-8'>

        <button
            onClick={()=> navigate ("/Calculator")}
            className='w-60 mx-auto bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-2xl py-10 px-1 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled-transform-none flex items-center justify-center space-x-2'>
                    
                <Play className='w-5 h-5'/>
                <span>Start</span>

            </button>

    </div>
  )
}

export default StartButton