var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')
/*get staff listing */
router.get('/', staffController.staff);
router.get('/:id', staffController.show);
router.delete('/:id', staffController.destroy);
router.put('/:id', staffController.update);
router.post('/', staffController.insert);

module.exports = router;