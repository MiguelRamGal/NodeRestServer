const express = require('express')//Instancio mi librería express
const app = express()//Configuro mi express
require('./config/config')//Importo mi archivo de configuraciones, en el cual tengo mis puertos etc

//BODYPARSER
const bodyParser = require('body-parser')//Instáncio mi librería body parse,la cual me permete manejar la información de tipo POST
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//BODYPARSER



//Hago una peticion GET ayuda a modificar data
app.get('/usuario', function (req, res) {
  res.json('get Usuario')
})
 
//Hago una peticion POST ayuda a crear data
app.post('/usuario', function (req, res) {
    let info = req.body;//De esta forma obtengo la data de tipo post
    
    if(info.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario"
        });//De esta forma mando un código al front, en este un error 400
    }else{
        res.json({
            persona:info
        })
    }
  })

//Hago una peticion PUT ayuda a modificar data
//Con este código indico /usuario/:id que si la url acontinuacioón viene con un valo por ejemplo /usuario/sdfsdfsdfsdf
//a ese valor le daré la variable de id
app.put('/usuario/:id', function (req, res) {
    let idUsuario = req.params.id; //De esta Forma obtengo el valor de /:id que estoy reciviendo en mi petición
    
    //De esta forma imprimo el objeto en forma de JSON
    res.json({
        id: idUsuario
    })
  })

//Hago una peticion DELETE ayuda a eliminar data
app.delete('/usuario', function (req, res) {
    res.json('delete Usuario')
  })

app.listen(process.env.PORT, () => {
    console.log("Escuchando el puerto: ",process.env.PORT)
})