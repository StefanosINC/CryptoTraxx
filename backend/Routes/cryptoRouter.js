const express = require('express');
const router = express.Router();
const { currencyData} = require('../Controller/cryptoController');
router.route('/')
    .get(currencyData);
    

module.exports = router;