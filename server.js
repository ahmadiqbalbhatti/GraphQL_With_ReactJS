const express        = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const schema         = require("./schema/schema");

const port = 4000;

// Create an Express application
const app = express();

app.use("/graphql", expressGraphQL({
  schema,
  graphiql: true
}));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
