import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class LanguageSelection extends React.Component {
  static contextType = LanguageContext
  render() {
    console.log(this.context)
    return (
      <div>
      
          Select a language:
          <i onClick={() => this.context.onLanguageChange('english')} className ="flag us"></i>
          <i onClick={() => this.context.onLanguageChange('dutch')} className ="flag nl"></i>
        </div>
    )
  }
}
export default LanguageSelection