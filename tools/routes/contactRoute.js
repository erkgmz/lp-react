import { Router } from 'express';

const router = Router();
let contactController = require('../controllers/contactController.js');

router.route('/')
  .post(contactController.sendMessage);

module.exports = router;
