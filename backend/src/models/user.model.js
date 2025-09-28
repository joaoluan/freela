module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    email: {
      type: Sequelize.STRING,
      allowNull: false, // Não pode ser nulo
      unique: true      // Deve ser único
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tipo_de_usuario: {
      type: Sequelize.STRING, // 'FREELANCER' ou 'EMPRESA'
      allowNull: false
    }
  });

  return User;
};