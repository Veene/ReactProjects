import React from 'react'
import UserCreate from './UserCreate'
import { LanguageStore } from '../contexts/LanguageContext'
import LanguageSelection from './LanguageSelection'

class App extends React.Component {

  render() {
    return(
      <div className="ui cointainer">
      <LanguageStore >
        <LanguageSelection />

        <UserCreate />
        
      </LanguageStore>
      </div>
    )
  }
}

export default App