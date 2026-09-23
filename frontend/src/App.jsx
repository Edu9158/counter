import { useState } from 'react'
import './App.css'

function App() {
  const [displayValue, setDisplayValue] = useState('0')

  const handleNumber = (number) => {
    setDisplayValue(prev => prev === '0' ? number : prev + number)
  }

  const handleOperator = (operator) => {
    setDisplayValue(prev => prev + " " + operator + " ")
  }

  const handleEqual = () => {
    try {
      setDisplayValue(eval(displayValue).toString())
    } catch (error) {
      setDisplayValue('Error')
    }
  }

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <input 
          id="display" 
          type="text" 
          value={displayValue} 
          readOnly 
        />

        <div>
          <button onClick={() => handleNumber('1')}>1</button>
          <button onClick={() => handleNumber('2')}>2</button>
          <button onClick={() => handleNumber('3')}>3</button>
          <br></br>
          <button onClick={() => handleNumber('4')}>4</button>
          <button onClick={() => handleNumber('5')}>5</button>
          <button onClick={() => handleNumber('6')}>6</button>
          <br></br>
          <button onClick={() => handleNumber('7')}>7</button>
          <button onClick={() => handleNumber('8')}>8</button>
          <button onClick={() => handleNumber('9')}>9</button>
          <br></br>
          <button onClick={() => handleNumber('0')}>0</button>
          <br></br>
          <button onClick={() => handleOperator('+')}>+</button>
          <button onClick={() => handleOperator('-')}>-</button>
          <button onClick={() => handleOperator('*')}>*</button>
          <button onClick={() => handleOperator('/')}>/</button>
          <button onClick={() => handleEqual('=')}>=</button>

          <button onClick={() => setDisplayValue('0')}>C</button>
        </div>  

      </div>
    </div>
  )
}

export default App
