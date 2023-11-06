const graphql = require("graphql");
const _       = require("lodash");
// const {GraphQLString, GraphQLInt} = require("graphql");

const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema} = graphql;

const UserType = new GraphQLObjectType({
  name: "user", fields: {
    id       : {type: GraphQLString},
    firstName: {type: GraphQLString},
    age      : {type: GraphQLInt}
  }
});

const users = [
  {id: "123", firstName: "Bill", age: 20}, {
    id       : "124",
    firstName: "Hassan",
    age      : 22
  }
];

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType", fields: {
    user: {
      type: UserType, args: {
        id: {type: GraphQLString}
      }, resolve(parentValue, args) {
        return _.find(users, {id: args.id});

      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
