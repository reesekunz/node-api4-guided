// from https://www.npmjs.com/package/dotenv
// need to load before we use environment, so this line needs to be at the top of index.js
require("dotenv").config();

const server = require("./api/server.js");

// const defaults = require("./config/default");

const port = 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

// server.listen(defaults.port, () => {
//   console.log(
//     `\n*** Server Running on http://localhost:${defaults.port} ***\n`
//   );
// });


