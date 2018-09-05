import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs1 = `
  type Query {
    name: String!
  }
`

const typeDefs = `
  type Query {
    name: String!
    alias(heroName: String!): String!
  }
`
const typeDefs2 = `
  type Hero {
    _id: ID
    name: String!
    alias: String!
  }
  type Query {
    allHero: [Hero]
  }
`;

export default makeExecutableSchema({
  typeDefs,typeDefs1,typeDefs2,
  resolvers
});