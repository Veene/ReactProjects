
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleButton = this.handleButton.bind(this)
        this.handleAddOptions = this.handleAddOptions.bind(this)
        this.handleDeleteOptionSingle = this.handleDeleteOptionSingle.bind(this)
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
    handleDeleteOptions(){
        this.setState((prevState) => ({ options: [] }));
    }
    handleDeleteOptionSingle(optionToRemove){
        console.log('HDOSINGLE', optionToRemove)
        this.setState((prevState)=> {
            return {
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option
                })
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
IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        )
}
Header.defaultProps ={
    title: 'Some default!'
}
const Action = (props) => {
    return (
        <div>
            <button onClick=
                {props.handleButton} 
                disabled={!props.hasOptions}>
                    What should i do?
            </button>
        </div>
    );
}
const Options = (props) => {
    return (
        <div>
            <button 
                onClick={props.delete}>REMOVE</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                props.options.map(option => {
                    return <Option 
                                key={option}
                                optionText={option} 
                                handleDeleteOptionSingle={props.handleDeleteOptionSingle} />
                })
            }
        </div>
    )
}
const Option = (props) => {
        return(
            <div>
                {props.optionText}
                    <button 
                        onClick={() => {
                            props.handleDeleteOptionSingle(props.optionText)
                        }}
                    >
                            
                        delete
                </button>
            </div>
        ) 
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
        
        this.setState(() => {
            return {
                error: error
            }
        })
        if(!error) {
            e.target.option1.value = ''
        }
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





