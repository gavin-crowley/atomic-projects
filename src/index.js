import React from 'react'
import ReactDOM from 'react-dom'
import './css/styles.css'

// comment

import TechTipsCard from './components/molecules/TechTipsCard/TechTipsCard'

import { cardInfo } from './data/data'

export const App = () => {
  return (
    <div>
      <TechTipsCard cardInfo={cardInfo} />
    </div>
  )
}

// comment 


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)




