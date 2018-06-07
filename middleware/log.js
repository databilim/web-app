var Log = require('log')
    , log = new Log('info');

module.exports = (req,res,next)=>{

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    log.info(ip + " Giriş Yaptı")
    next()
}