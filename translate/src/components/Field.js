import React from 'react'
import LanguageContext from '../contexts/LanguageContext'


class Field extends React.Component {
  //form the link so that we get this.context
  static contextType = LanguageContext
  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Naam'
    return (
      <div className="ui field">
        <label>{text}</label>
        <input></input>
      </div>
    )
  }
}

export default Field