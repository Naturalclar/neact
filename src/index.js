const Neact = require('./neact')

/** @jsx Neact.createElement */
const element = (
	<div>
		<a>bar</a>
		<b/>
	</div>
)

const container = document.getElementById("root")

Neact.render(element, container)
