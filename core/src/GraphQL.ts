import { ApolloServer, gql } from "apollo-server-express"

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => "Hello world!",
    },
}

const server = new ApolloServer({ typeDefs, resolvers })
export default server
