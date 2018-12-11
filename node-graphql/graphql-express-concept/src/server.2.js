const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./root-query.schema-post-graphql')

const app = express()

app.use('/graphql', expressGraphQL({
	schema,
	graphiql: true
}))

app.listen(4000, () => {
	console.log('Server is running on port', 4000)
})
