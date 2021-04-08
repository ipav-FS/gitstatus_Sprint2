const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public') ;
const puerto= process.env.PORT;

app.use(express.static(publicPath));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});
app.get('/register.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});
app.get('/login.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});
app.get('/productDesc.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/productDesc.html'));
});
app.get('/productDescCapacitador.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/productDescCapacitador.html'));
});
app.get('/productDescCasco.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/productDescCasco.html'));
});
app.get('/productDescPlasma.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/productDescPlasma.html'));
});
app.get('/cart.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/cart.html'));
});


app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});
