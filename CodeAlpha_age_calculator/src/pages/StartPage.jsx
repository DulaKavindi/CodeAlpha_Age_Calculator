import React from 'react'
import StartButton from '../components/StartButton'

const StartPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700">
      <div className="max-w-xl w-full bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-10 mx-4 animate-fadeIn">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Age Calculator
          </h1>
          <div>
            <h3 className="text-xl text-indigo-100 font-semibold mb-2">Welcome 🎉</h3>
          </div>
          <p className="text-lg text-indigo-50 mb-4">
            Ready to discover your age in <span className="font-bold text-yellow-200">years</span>, <span className="font-bold text-pink-200">months</span>, and <span className="font-bold text-green-200">days</span>?<br />
            Just enter your birthdate and let’s begin your journey through time!
          </p>
        </div>
        <StartButton />
      </div>
      {/* Custom fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </div>
  )
}

export default StartPage