import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FailRatesStatistic from './algorithms/failRatesStatistic'	
import RecoveryString from './algorithms/recoveryString'
import SortChairs from './algorithms/sortChairs'
import SetColor from './algorithms/setColor'
import AverageNumber from './algorithms/averageNumber'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="algorithms-home">
      <AverageNumber />
    </div>
  )
}

export default App
