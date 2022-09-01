const config = require('../config');
const axios = require('axios');
const APIKEY = `4c834669-e6de-4ce6-8024-21420225ac20`;
const Crypto = require('../Schema/CryptoMode');
const axiosOptions = {
    headers: {
        "X-CMC_PRO_API_KEY": APIKEY
    }
}

exports.currencyData = async(req, res, next) => {
    try{
    const query = await axios.get(config.FetchCrypto, axiosOptions);
    const topCurrencies = query.data.data.slice(0,10);
    
     
    let tempObj = [];
     // ********** REVIEW *******************************
    topCurrencies.reduce(( acc, field ) => { // 
        Object.keys( field ).forEach( ( key ) => {
          if( field[key] ) {
            acc[key] = field[key];
          }
        } )
        tempObj.push({
            name: acc.name,
            symbol: acc.symbol,
            slug: acc.slug,
            CMCRank: acc.cmc_rank,
            USD: acc.quote.USD.price
        });
        return tempObj;
      }, {} )
      console.log(tempObj);
    
      //****************** REVIEW ********************************************** */
    
    return res.status(200).json(tempObj);
    } catch (err) {
        console.log(err.message);
    }


}
exports.addCryptoToDB = async(req, res, next) => {
    try {
        const retrieveData = this.currencyData(req.query);
        console.log(retrieveData);
        const addCrypto = await Crypto.create(req.body);
        console.log(addCrypto);

        res.status(200).json({
        status: 'success',
        results: addCrypto.length,
        data: { addCrypto }
    });
    } catch (err) {
    res.status(404).json({
        status: 'fail',
        message: 'Invalid Data Sent'
        });
    }
}
