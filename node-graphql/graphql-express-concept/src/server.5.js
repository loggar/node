const express = require('express')
const logger = require('morgan');
const expressGraphQL = require('express-graphql')
const schema = require('./root-query.schema-post-api-with-comment')

const app = express()

app.use(logger('dev'));

app.use('/graphql', expressGraphQL({
	schema,
	graphiql: true
}))

app.listen(4000, () => {
	console.log('Server is running on port', 4000)
})
