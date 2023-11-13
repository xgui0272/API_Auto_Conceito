/**
 * Bibliotecas externas
 */
const express = require('express');

/**
 * instanciando o router
 */
const router = express();

/**
 * Controller da aplicação
 */
const UserController = require('../controllers/UserController');

/**
 * middlewares da aplicação
 */
// const validate = require('../middlewares/handleValidation');
// const {budgetCreateValidation} = require('../middlewares/budgetValidation');

/**
 * Rotas de POST e GET
 */

router.post('/user/create', UserController.createUser);
router.post('/user/car', UserController.createCar);
router.post('/user/maintenance', UserController.createMaintenance);


router.get('/show/all', UserController.showAll);


module.exports = router;