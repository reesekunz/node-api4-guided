module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/shouts.db3"
    },
    // copy deployment object and change it to production - heroku is looking for
    // production not development (can tell from heroku logs on terminal)
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  // copy deployment object and change it to production - heroku is looking for
  // production not development (can tell from heroku logs on terminal)
  production: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/shouts.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
