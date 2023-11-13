/**
 * import sequelize
 */
const {Op} = require('sequelize');

/**
 * Import Model dos models Usuario Carro e Manutenção
 */
const {User, Carro, Manutencao} = require('../models/User');

/**
 * Classe com todos os controllers do model de Usuario
 */ 
module.exports = class UserController {

    /**
     *Controller para criar novos usuarios
     */
    static async createUser(req, res) {

        const body = {
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            senha: req.body.senha,
            confirmasenha: req.body.confirmasenha
        }

        try {
          await User.create(body);
          res.status(201).json({ success: true}); 
        } catch (error) {
          console.log(error)
        }
        
    }



    /**
     *Controller para criar novos Carros
     */
     static async createCar(req, res) {

        const body = {
            marca: req.body.marca,
            modelo: req.body.modelo,
            ano: req.body.ano,
            motor: req.body.motor,
            categoria: req.body.categoria,
            placa: req.body.placa,
            telefone: req.body.telefone,
        }

        try {
          await Carro.create(body);
          res.status(201).json({ success: true}); 
        } catch (error) {
          console.log(error)
        }
        
    }

    /**
     *Controller para criar manutenção
     */
     static async createMaintenance(req, res) {

        const body = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            custo: req.body.custo,
            km: req.body.km,
            placa: req.body.placa,
        }

        try {
          await Manutencao.create(body);
          res.status(201).json({ success: true}); 
        } catch (error) {
          console.log(error)
        }
        
    }

    /**
     *Controller para exibir todos os dados de um cliente
     */
     static async showAll(req, res) {

      try {
    const cliente = await User.findOne({
      where: { id: 1 }, 
      include: [
        {
          model: Carro, 
          include: Manutencao, 
        },
      ],
    });

    if (cliente) {
      res.status(200).json({ success: true, data: cliente }); 
    } else {
      res.status(404).json({ success: false, message: 'Cliente não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao buscar cliente:', error);
    res.status(500).json({ success: false, message: 'Erro ao buscar cliente.' });
  }

          
          
    }

    

}