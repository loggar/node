import express from 'express'
import sample from './lib-sample'

const app = express()
app.get('/api', (req, res) => {
	res.send({
		message: 'server hot reloaded version: 003',
		sample_module_data: sample.fn1()
	})
})
export default app