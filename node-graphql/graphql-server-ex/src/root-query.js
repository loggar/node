const graphql = require('graphql')
const {
	GraphQLObjectType,
	GraphQLSchema,
} = graphql // destructure the objects we need from graphql

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		// this will be filled in a bit
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery
})
