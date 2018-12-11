const graphql = require('graphql')
const fetch = require('node-fetch')
const {
	GraphQLObjectType,
	GraphQLList,
	GraphQLInt,
	GraphQLString,
} = graphql

const CommentType = require('./commentType')

const PostType = new GraphQLObjectType({
	name: 'Post',
	description: 'This is my post type',
	fields: {
		id: { type: GraphQLInt },
		title: { type: GraphQLString },
		body: { type: GraphQLString },
		comments: {
			type: new GraphQLList(CommentType),
			async resolve(parentValue) {
				const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${parentValue.id}/comments`)
				return post.json()
			}
		}
	}
})

module.exports = PostType