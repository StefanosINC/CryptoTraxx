const express = require('express');
const router = express.Router();
const { currencyData,addCryptoToDB } = require('../Controller/cryptoController');
router.route('/')
    // .get(currencyData)
    .post(addCryptoToDB);

module.exports = router;