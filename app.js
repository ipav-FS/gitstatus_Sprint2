const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public') ;
const puerto= process.env.PORT;

app.use(express.static(publicPath));
app.set('view engine', 'ejs');

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('index');
});
app.get('/register', (req,res) => {
    res.render('register');
});
app.get('/login', (req,res) => {
    res.render('login');
});
app.get('/productDesc', (req,res) => {
    res.render('productDesc');
});
app.get('/productDescCapacitador', (req,res) => {
    res.render('productDescCapacitador');
});
app.get('/productDescCasco', (req,res) => {
    res.render('productDescCasco');
});
app.get('/productDescPlasma', (req,res) => {
    res.render('productDescPlasma');
});
app.get('/cart', (req,res) => {
    res.render('cart');
});
app.get('/createProd', (req,res) => {
    res.render('createProd');
});

app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});
