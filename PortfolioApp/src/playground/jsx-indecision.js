console.log('App.js is running!')

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life int he hands of a computer',
    options: []
}
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.option.value
    if(option) {
        app.options.push(option);
        e.target.option.value = ''
    }
    renderApp();
}
const onRemoveHandler = (e) => {
    e.preventDefault()
    app.options= [];
    renderApp()
}
const onMakeDecisionHandler = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option)
}
const appRoot = document.getElementById('app')

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecisionHandler}>What should I do?</button>
            <button onClick={onRemoveHandler}>REMOVE</button>
            <p>{app.options.length}</p>
            <ol>
                {app.options.map(option => {
                    return <li key={option}>{option}</li>
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button >Add Option</button>
                
            </form>
        </div>
    )
    
    ReactDOM.render(template, appRoot)
}
renderApp();
