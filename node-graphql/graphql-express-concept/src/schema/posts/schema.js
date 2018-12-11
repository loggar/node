const graphql = require('graphql')
const fetch = require('node-fetch')

const {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull,
	GraphQLID,
	GraphQLString,
	GraphQLInt
} = graphql

const PostType = require('./postType')

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		posts: {
			type: new GraphQLList(PostType),
			args: {},
			async resolve(parentValue, args) {
				const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
				return posts.json()
			}
		},
		post: {
			type: PostType,
			args: { id: { type: new GraphQLNonNull(GraphQLID) } },
			async resolve(parentValue, args) {
				const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${args.id}`)
				return post.json()
			}
		}
	}
})

const MutationType = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		create: {
			type: PostType,
			args: {
				title: { type: GraphQLString },
				body: { type: GraphQLString },
				id: { type: GraphQLInt }
			},
			async resolve(parentValue, { title, body, id }) {
				const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
					method: 'POST',
					body: JSON.stringify({
						title,
						body,
						id
					}),
					headers: {
						'Content-type': 'application/json; charset=UTF-8'
					}
				})

				const post = await response.json
				return post
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: MutationType
})
