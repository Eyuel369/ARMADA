const express = require('express');
const router = express.Router();
const contractsController = require('../controllers/contractsController');

router.post('/',userAuth, contractsController.createContract);
router.get('/', userAuth,contractsController.getContracts);
router.get('/:id', userAuth,contractsController.getContractById);
router.put('/:id', userAuth,contractsController.updateContractById);
router.delete('/:id', userAuth,contractsController.deleteContractById);

module.exports = router;
