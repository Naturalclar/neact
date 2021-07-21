const Neact = require('./neact')

/** @jsx Neact.createElement */

function App(props) {
	return <h1>Hi {props.name}</h1>
}

const element = <App name="Naturalclar" />

const container = document.getElementById("root")

Neact.render(element, container)
