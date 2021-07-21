const Neact = require('./neact')

/** @jsx Neact.createElement */

function App(props) {
	const [count, setCount] = Neact.useState(0)
	return ( 
		<h1 onClick={()=>setCount(c => c + 1)}>
			Hi {props.name}! Count: {count}
		</h1>
	)
}

const element = <App name="Naturalclar" />

const container = document.getElementById("root")

Neact.render(element, container)
