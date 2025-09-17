import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FailRatesStatistic from './algorithms/failRatesStatistic'	
import RecoveryString from './algorithms/recoveryString'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="algorithms-home">
      <RecoveryString />
    </div>
  )
}

export default App
