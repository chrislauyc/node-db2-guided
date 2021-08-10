module.exports = {
  // different configs for diffrent dbs (dev, prod, testing, qa, staging...)
  development : {
    client: 'sqlite3',
    connection: {
      filename: '',
    }
  }
}
