const express = require('express')
const router = express.Router()
const testController = require('../controllers/test.controller')

router.get('/hello', testController.hello)
router.post('/create_tag', testController.create_tag)
router.get('/update_tag', testController.update_tag)
router.get('/delete_tag', testController.delete_tag)
router.get('/show_all_tag', testController.show_all_tag)

module.exports = router
