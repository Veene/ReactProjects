class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            visibility: false
        }

        this.showDetailsHandler = this.showDetailsHandler.bind(this)
    }
    showDetailsHandler() {
        console.log('show details button hit')
        // const toggle = !this.state.visibility
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.showDetailsHandler}>
                    {this.state.visibility ? 'Hide Details' : 'Show details'}
                </button>
                {this.state.visibility && <p>Random information</p>}
            </div>
            
        )
    }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))




// const details = {
//     details: "Random information",
//     visibility: false
// }

// const showDetailsHandler = () => {
//     details.visibility ? details.visibility = false : details.visibility = true
//     renderApp()
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showDetailsHandler}>{details.visibility ? 'Hide details' : 'Show details'}</button>
//             {details.visibility && <p>Random informations</p>}
//         </div>
//     )

//     ReactDOM.render(template, document.getElementById('app'))
// }
// renderApp()