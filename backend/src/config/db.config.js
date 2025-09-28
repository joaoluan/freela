module.exports = {
  HOST: "localhost",
  USER: "postgres", // O usuário padrão do Postgres
  PASSWORD: "Gul9314*", // A senha que você criou na instalação
  DB: "plataforma_freela_db", // O nome do banco de dados que criamos
  dialect: "postgres",
  pool: {
    max: 5,   // Máximo de conexões no pool
    min: 0,   // Mínimo de conexões no pool
    acquire: 30000, // Tempo máximo (ms) para tentar obter uma conexão
    idle: 10000     // Tempo máximo (ms) que uma conexão pode ficar ociosa
  }
};