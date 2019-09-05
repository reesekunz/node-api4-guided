const knex = require('knex');

// important for deploying to heroku. if using locally, use development. if deploying to
// herkou, use process.env.NODE_ENV
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];

module.exports = knex(config);
