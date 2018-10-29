import React from 'react';

import AddOption from '../../src/components/AddOption'
import Options from '../../src/components/Options'
import Header from '../../src/components/Header'
import Action from '../../src/components/Action'

class IndecisionApp extends React.Component {
    state = {
        options: []
    }
    
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(options) {
                this.setState(() => {
                    return {
                        options: options
                    }
                })
            }
        }
        catch (e) {
            // DO NOTHING AT ALL
        }     
    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('saving Data')
        }
        
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    //handleDeleteOptions
    handleDeleteOptions = () => {
        this.setState((prevState) => ({ options: [] }));
    }
    handleDeleteOptionSingle = (optionToRemove) => {
        console.log('HDOSINGLE', optionToRemove)
        this.setState((prevState)=> {
            return {
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option
                })
            }
        })
    }
    handleButton = () => {
        let randomIndex = Math.floor(Math.random()*this.state.options.length)
        alert(this.state.options[randomIndex])
    }
    handleAddOptions = (option) => {
        if(!option) {
            return 'Enter valid value to add item'
            console.log('Enter valid value to add item')
        } else if (this.state.options.indexOf(option) > -1) {
            console.log('this option already exists')
            return 'this option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    render() {
        const title = "Indecision"
        const subtitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header 
                    title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handleButton={this.handleButton}
                    />
                <Options 
                    options={this.state.options}
                    delete={this.handleDeleteOptions} 
                    handleDeleteOptionSingle={this.handleDeleteOptionSingle}
                    />
                <AddOption handleAddOptions={this.handleAddOptions}/>
            </div>
        )
    }
}

export default IndecisionApp;