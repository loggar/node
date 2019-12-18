const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql" | "mariadb" | "sqlite" | "postgres" | "mssql", //choose anyone between them

  // To create a pool of connections
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // For SQLite only
  storage: "path/to/database.sqlite"
});
