var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController')
const { body } = require('express-validator');
/*get staff listing */
router.get('/', staffController.staff);
router.get('/:id', staffController.show);
router.delete('/:id', staffController.destroy);
router.put('/:id', staffController.update);
router.post('/',[
    body('name').not().isEmpty().withMessage("กรุณาป้อนชื่อสกุลด้วย"),
    body('salary').not().isEmpty().withMessage("กรุณาป้อนเงินเดือน").isFloat().withMessage("เงินเดือนต้องเป็นตัวเลข").isFloat({min:1}).withMessage("ต้องใส่เงินเดือนมากกว่า 0 บาท")
], staffController.insert);

module.exports = router;