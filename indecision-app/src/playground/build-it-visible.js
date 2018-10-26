const details = {
    details: "Random information",
    visibility: false
}

const showDetailsHandler = () => {
    details.visibility ? details.visibility = false : details.visibility = true
    renderApp()
}

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showDetailsHandler}>{details.visibility ? 'Hide details' : 'Show details'}</button>
            {details.visibility && <p>Random informations</p>}
        </div>
    )

    ReactDOM.render(template, document.getElementById('app'))
}
renderApp()