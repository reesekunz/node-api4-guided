// from https://www.npmjs.com/package/dotenv
// need to load before we use environment, so this line needs to be at the top of index.js
require("dotenv").config();

const server = require("./api/server.js");

// need to change port to make it dynamic so it can go with heroku
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

// another way to do it by importing defaults

// const defaults = require("./config/default");

// server.listen(defaults.port, () => {
//   console.log(
//     `\n*** Server Running on http://localhost:${defaults.port} ***\n`
//   );
// });
