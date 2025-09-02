import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import InputForm from './components/InputForm'
import ActionButtons from './components/ActionButtons'
import ErrorMessage from './components/ErrorMessage'
import AgeResults from './components/AgeResults'
import { calculateAge, validateDate } from './utils/ageCalculator'
import { Calendar, Clock, Cake, User } from 'lucide-react';

const App=()=> {

  const [birthDate, setBirthDate] = useState({

    day: '',
    month : '',
    year : ''
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field, value) => {
    setBirthDate(prev => ({
      ...prev,
      [field]: value
    }));
    setError('');
  };


  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const validationError = validateDate(
        parseInt(birthDate.day),
        parseInt(birthDate.month),
        parseInt(birthDate.year)
      );
      if (validationError) {
        setError(validationError);
        setResult(null);
        setIsCalculating(false);
        return;
      }
      try {
        const age = calculateAge({
          day: parseInt(birthDate.day),
          month: parseInt(birthDate.month),
          year: parseInt(birthDate.year)
        });
        setResult(age);
        setError('');
      } catch (err) {
        setError(err.message);
        setResult(null);
      }
      setIsCalculating(false);
    }, 500);
  }

  const handleReset = () => {
    setBirthDate({day: '', month: '', year: ''});
    setResult(null);
    setError('')
  };

  const currentYear = new Date().getFullYear();

  return(

    <div className='min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 p-4'>

      <div className='max-w-4xl mx-auto'>

        <Header/>

        {/*Main container*/}
        <div className='bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-white/20'>

        <InputForm
          birthDate={birthDate}
          onInputChange={handleInputChange}
          currentYear={currentYear}/>

        <ActionButtons
          onCalculate={handleCalculate}
          onReset={handleReset}
          isCalculating={isCalculating}/>

        <ErrorMessage
          error={error}/>

        <AgeResults
          result={result}/>

        </div>
      </div>

      {/*Custom styles*/}
      
  <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}
      </style>
    </div>
  )

} 
 

export default App
