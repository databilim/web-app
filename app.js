/*
RAHMAN VE RAHİM OLAN ALLAHIM SENİN ADINLA
BİZE BU İŞİ BAŞARILI BİR ŞEKİLDE BİTİRMEMİZİ SAĞLA
AKIL VE BİLGİYİ VEREN SENSİN , DOĞRU BİR ŞEKİLDE KULLANMAMIZA YADIMCI OL
VERMİŞ OLDUĞUMUZ KARARLARDA BİZE YARDIM ET
 */


const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');




const index = require('./routes/index');
const doc = require('./routes/docApi');
const post = require('./routes/post');
const urun = require('./routes/urun');
const urunmarka = require('./routes/urunMarka');
const urunOzellik = require('./routes/urunOzellik');
const icerik = require('./routes/icerik');
const user = require('./routes/users');
const admin = require('./routes/admin');

const sayfaMenu = require('./routes/sayfaMenu');
const slider = require('./routes/slider');
const kategori = require('./routes/kategori');
const genelayar = require('./routes/genelayar');
const firma = require('./routes/firma');
const mail = require('./routes/mail');
const db  = require('./helper/db')();


const app = express();
const config  = require('./config');
app.set("api_secret_key",config.api_secret_key)



// MIDDLEWARE 
const MGenelAyar = require("./middleware/genelayar.js")
const Mfirma = require("./middleware/firma")
const MsayfaMenu = require("./middleware/sayfamenu")
const MurunMarka = require("./middleware/urunMarka")
const Mslider = require("./middleware/slider")
const vToken = require("./middleware/token")
const log = require("./middleware/log")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(MGenelAyar)
app.use(Mfirma)
app.use(MsayfaMenu)
app.use(MurunMarka)
app.use(Mslider)
app.use(log)

app.use('/admin', admin);
app.use('/', index);
app.use('/doc/api', doc);
app.use('/doc/post', post);


app.use('/api/', vToken);
app.use('/api/sayfamenu', sayfaMenu);
app.use('/api/kategori', kategori);
app.use('/api/icerik', icerik);
app.use('/api/urun', urun);
app.use('/api/urunMarka', urunmarka);
app.use('/api/urunOzellik', urunOzellik);
app.use('/api/genelayar', genelayar);
app.use('/api/firma', firma);
app.use('/api/mail', mail);
app.use('/api/slider', slider);
app.use('/user', user);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  console.log(err)
  res.send("HATA BÖYLE BİR SAYFA MEVCUT DEĞİLDİR 404 ")

  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
    res.send("HATA 500 ")

    console.log(err)
});

module.exports = app;
