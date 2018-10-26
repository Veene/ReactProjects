let count = 0;
const addOne = () => {
    count += 1;
    console.log('addOne', count)
    renderCounterApp();
}
const minusOne = () => {
    count-=1;
    console.log('minusOne');
    renderCounterApp();
}
const reset = () => {
    count=0;
    console.log('reset')
    renderCounterApp();
}

const appRoot = document.getElementById('app')



const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>RESET</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();