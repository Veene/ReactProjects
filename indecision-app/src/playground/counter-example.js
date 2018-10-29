class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }

        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }
    componentDidMount() {
        try{
            const json = localStorage.getItem('count')
            const savedCount = JSON.parse(json)
            this.setState(() => {
                return {
                    count: savedCount
                }
            })
        }
        catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count)
            localStorage.setItem('count', json)
        }
    }
    handleAddOne() {
        console.log('handleAddOne')
        // const addedCount = this.state.count + 1
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne() {
        console.log('handleMinusOne')
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        console.log('handleReset')
        this.setState(()=> {
            return {
                count: 0
            }
        })
        
    }
    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))


// let count = 0;
// const addOne = () => {
//     count += 1;
//     console.log('addOne', count)
//     renderCounterApp();
// }
// const minusOne = () => {
//     count-=1;
//     console.log('minusOne');
//     renderCounterApp();
// }
// const reset = () => {
//     count=0;
//     console.log('reset')
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app')



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>RESET</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();