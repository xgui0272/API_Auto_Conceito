const { DataTypes } = require('sequelize');
const db = require('../db/conn');

/**
 * Model da tabela de cliente
 */
const User = db.define('User', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  confirmasenha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



/**
 * Model da tabela de Carros
 */
const Carro = db.define('Carro', {
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ano: {
    type: DataTypes.INTEGER,
  },
  motor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  placa: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
        model: 'User', // Nome da tabela de referência (tabela "Cliente")
        key: 'telefone', // Nome do campo de referência (chave primária de "Cliente")
    },
    
  },
});



/**
 * Model da tabela de Manutenção
 */
const Manutencao = db.define('Manutencao', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
    custo: {
      type: DataTypes.DECIMAL(10, 2),
    },
    km: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Carro', // Nome da tabela de referência (tabela "Carro")
        key: 'placa', // Nome do campo de referência (chave primária de "Carro")
      },
    },
  });

User.hasMany(Carro, { foreignKey: 'telefone' }); // Relação: um cliente pode ter muitos carros
Carro.hasMany(Manutencao, { foreignKey: 'placa' }); // Relação: um carro pode ter muitas manutenções

module.exports = {User, Carro, Manutencao};
