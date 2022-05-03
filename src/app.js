const express = require('express');
const path= require('path');
const datos = require('./public/productsDataBase.json');

const views= path.resolve(__dirname, './views');
const public= path.resolve(__dirname, './public');
console.log(public)
//Routes imports
const personas = require('./routes/personas');
const productos = require('./routes/productos');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(public));
app.use('/personas', personas);
app.use('/productos', productos);

app.get('/', (req, res) => {    
    res.render('index', { 
        datos,
        sections: [
            {
                title: 'Titulo 1',
                description: 'Descripcion 1'
            },
            {
                title: 'Titulo 2',
                description: 'Descripcion 2'
            },
            {
                title: 'Titulo 3',
                description: 'Descripcion 3'
            }
        ]
     });
});

let port = process.env.PORT || 3000;

/*=================================================================*/
/* entrada al hamburguer.html */
app.get('/hamburguer', (req, res) => {
    res.status(200).sendFile(views + '/hamburguer.html')
})


app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
