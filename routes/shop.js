var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')
const { body } = require('express-validator');

/* GET home page. */
router.get('/', shopController.shop);
router.get('/menu', shopController.menu);
router.get('/:id', shopController.show);
router.post('/',[
    body('name').not().isEmpty().withMessage("กรุณาป้อนชื่อสกุลด้วย"),
    body('location').not().isEmpty().withMessage("กรุณาป้อนตำแหน่งที่อยู่"),
    body('photo').not().isEmpty().withMessage("กรุณาใส่รูปภาพ").isBase64("รูปภาพต้องแปลงเป็น base 64")
], shopController.insert);



module.exports = router;