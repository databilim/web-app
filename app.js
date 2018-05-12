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

const kategori = require('./routes/kategori');
const genelayar = require('./routes/genelayar');
const firma = require('./routes/firma');
const mail = require('./routes/mail');
const db  = require('./helper/db')();
const app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Firma Ayar Statik sayfa
app.use( (req, res, next)=> {
   const Firma = require("./model/FirmaAyar")
   const firma = Firma.findOne();
   firma.then((firma)=>{

       res.firma = firma;

       next()
   }).catch((err)=>{
       console.log(err)
       next()
   })


})

app.use((req,res,next)=>{

    const Kategori = require("./model/Kategori");
    const kategori = Kategori.find().sort({sira:1});

    kategori.then((data)=> {
        res.kategori = data
        next()
    })




})



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/doc/api', doc);
app.use('/api/kategori', kategori);
app.use('/api/genelayar', genelayar);
app.use('/api/firma', firma);
app.use('/api/mail', mail);

// catch 404 and forward to error handler
app.use((req, res, next)=> {
    const err = new Error('Not Found');
  err.status = 404;
  res.send(err); // hata sayfası hat.pug
  next(err);
});

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});




module.exports = app;
