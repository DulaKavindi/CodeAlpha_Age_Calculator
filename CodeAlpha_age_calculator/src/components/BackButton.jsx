import { Undo2 } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const BackButton=()=> {

    const navigate = useNavigate();
  return (
    <div>

        <button
            onClick={()=> navigate ("/StartPage")}
            className='flex-1 bg-gradient-to-r from-red-500 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled-transform-none flex items-center justify-center space-x-2'>
                    
                <Undo2 className='w-5 h-5'/>
                <span>Back</span>

            </button>

    </div>
  )
}

export default BackButton