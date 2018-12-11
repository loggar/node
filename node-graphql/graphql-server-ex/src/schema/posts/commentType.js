const graphql = require('graphql')

const {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
} = graphql

const CommentType = new GraphQLObjectType({
	name: 'Comment',
	fields: {
		id: { type: GraphQLInt },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		body: { type: GraphQLString }
	}
})

module.exports = CommentType