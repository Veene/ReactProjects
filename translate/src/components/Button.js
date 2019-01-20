import React from 'react'
import LanguageContext from '../contexts/LanguageContext'


class Button extends React.Component {
  //this is how you add context to the Button class, using static which sets it on the class directly (can only be called with Button.contextType)
  // static contextType = LanguageContext
  render() {
    //collecting value from App (LanguageContext.Provider) and the value is linked to App's state language. when that state changes, it changes here
    console.log(this.context)
    //text changes based on this.context which changes based on the languagecontext.Provider
    const text = this.context === 'english' ? 'Submit' : 'Voorleggenn'
    return (
      
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
        </LanguageContext.Consumer>
      </button>
    )
  }
}

export default Button