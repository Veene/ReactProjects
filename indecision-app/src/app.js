
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleButton = this.handleButton.bind(this)
        this.handleAddOptions = this.handleAddOptions.bind(this)
    }
    //handleDeleteOptions
    handleDeleteOptions(){
        this.setState((prevState) => {
            return {
                options: []
            }
        })
    }
    handleButton() {
        let randomIndex = Math.floor(Math.random()*this.state.options.length)
        alert(this.state.options[randomIndex])
    }
    handleAddOptions(option){
        if(!option) {
            return 'Enter valid value to add item'
            console.log('Enter valid value to add item')
        } else if (this.state.options.indexOf(option) > -1) {
            console.log('this option already exists')
            return 'this option already exists'
        }
        const newOptions = [...this.state.options]
        newOptions.push(option)
        //did a few diff ways (spread works too but im not sure..)
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
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
                    />
                <AddOption handleAddOptions={this.handleAddOptions}/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}
class Action extends React.Component {
    
    // handleButton() {
    //     console.log(this.props)
    //     let randomIndex = Math.floor(Math.random()*this.props.options.length)
    //     alert(this.props.options[randomIndex])
    // }
    render() {
        return (
            <div>
                <button onClick={this.props.handleButton} disabled={!this.props.hasOptions}>What should i do?</button>
            </div>
        );
    }
}
class Options extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <button onClick={this.props.delete}>REMOVE</button>
                <p>{this.props.options.length}</p>
                {this.props.options.map(option => {
                    return <Option key={option} optionText={option} />
                })}
                
            </div>
        )
    }
}
class Option extends React.Component {
    render() {
        return(
            <div>
                {this.props.optionText}
            </div>
        )
    }
}
class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            error: undefined
        }

        this.handleOnSubmit=this.handleOnSubmit.bind(this)
    }
    handleOnSubmit(e) {
        //remember to prevent default on submits which refresh full page
        e.preventDefault();
        const option = e.target.option1.value.trim();
        const error = this.props.handleAddOptions(option)
        e.target.option1.value = ''
        this.setState(() => {
            return {
                error: error
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleOnSubmit}>
                    <input type='text' placeholder="add option" name="option1"  />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))



