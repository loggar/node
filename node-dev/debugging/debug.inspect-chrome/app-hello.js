'use strict'

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

function capitalize(str) {
	const firstLetter = str.charAt(0) // we can check what's inside here
	return `${firstLetter.toUpperCase()}${str.slice(1)}`
}

app.get('/:name?', (req, res) => {
	const name = req.params.name ? capitalize(req.params.name) : 'World'
	res.send(`Hello ${name}!`)
})

app.listen(PORT, () => console.log(`App listening on *:${PORT}`))
