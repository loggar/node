# GraphQL server

```
npm i

npm install --save-dev cross-env

npm run dev
```

test schema

```
query {
  users {
    id
    email
  }
}
```

test mutation

```
mutation {
   createUser(input: {
    email: "a@b.com"
   }) {
    id,
    email
  }
}
```