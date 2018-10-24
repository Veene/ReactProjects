console.log('App.js is running!')

const app = {
    title: 'how to',
    subtitle: 'eat',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    </div>
)

const user = {
    name: 'Andrew',
    age: 26,
    location: 'Philadelphia'
};
function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>
    } 
}
const userName = 'Mike'
const age = 29

const title = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>{user.age}</p>}
        {getLocation(user.location)}
    </div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);