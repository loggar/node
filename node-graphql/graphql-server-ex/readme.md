# GraphQL server with Node and Express

refs)

* https://hackernoon.com/wiring-up-a-graphql-server-with-node-and-express-9d00489da4be
* https://hackernoon.com/advanced-querying-with-graphql-and-express-8cf2fd05f5ea
* https://hackernoon.com/mutations-in-graphql-9ac6a28202a2

## GraphQL server with Node and Express

```
npm install express morgan graphql express-graphql
```

```
npm i -S node-fetch
```

run samples

``` sh
node ./src/server.2  # sample static graphql schema

node ./src/server.3  # with api from other destination
```

http://localhost:4000/graphql

consume graphql query

```
{
  posts {
    id,
    title,
  }
}
```

## Query parameters

run sample server

``` sh
node ./src/server.4
```

graphql query

```
{
  post (id: 5) {
    id,
    title,
  }
}
```

## Nested queries

``` sh
node ./src/server.5
```

graphql query

```
{
  post (id: 5) {
    id,
    title,
    comments {
      email,
      body
    }
  }
}
```

## Mutations in GraphQL

``` sh
node ./src/server.6
```

graphql query

```
mutation createPost($title: String, $body: String, $id: Int) {
  create(title: $title, body: $body, id: $id) {
    title
    body
    id
  }
}
```

# Query Variables

```
{
  "title": "Test title",
  "body": "Test body",
  "id": 102
}
```
