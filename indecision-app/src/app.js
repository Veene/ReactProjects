
class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision"
        const subtitle = "Put your life in the hands of a computer"
        const options = ['Thing one', 'Thing two', 'Thing four']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}
class Action extends React.Component {
    handleButton() {
        alert('handlebutton')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleButton}>What should i do?</button>
            </div>
        );
    }
}
class Options extends React.Component {
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>REMOVE</button>
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
    handleOnSubmit(e) {
        //remember to prevent default on submits which refresh full page
        e.preventDefault();
        const option = e.target.option1.value.trim();
        alert(option)
    }
    render() {
        return (
            <div>
                AddOption component here
                <form onSubmit={this.handleOnSubmit}>
                    <input type='text' placeholder="add option" name="option1"  />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))



