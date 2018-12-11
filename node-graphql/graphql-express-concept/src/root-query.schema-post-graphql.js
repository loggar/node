const graphql = require('graphql')
const {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLList,
	GraphQLInt,
	GraphQLString,
} = graphql


const PostType = new GraphQLObjectType({
	name: 'Post',
	description: 'This is my post type',
	fields: {
		id: { type: GraphQLInt },
		title: { type: GraphQLString },
		body: { type: GraphQLString }
	}
})

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		posts: {
			type: new GraphQLList(PostType),
			args: {},
			resolve(parentValue, args) {
				return [
					{
						id: 1,
						title: 'Test Post 1',
						body: 'Lorem ipsum dolor sit amet'
					},
					{
						id: 2,
						title: 'Test Post 2',
						body: 'Lorem ipsum dolor sit amet'
					},
					{
						id: 3,
						title: 'Test Post 3',
						body: 'Lorem ipsum dolor sit amet'
					}
				]
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery
})
