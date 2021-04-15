const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))


// Route params
router.get('/vuelos/:from/:to/:departure_date/:return_date', (req, res) => {

    const { from, to, departure_date, return_date } = req.params

    console.log('---------')
    console.log('Este es el objeto req.params:', req.params)
    console.log('Debes enviar a la BBDD como origen', from)
    console.log('Debes enviar a la BBDD como destino', to)
    console.log('Debes enviar a la BBDD como fecha ida', departure_date)
    console.log('Debes enviar a la BBDD como fecha vuelta', return_date)
    console.log('---------')

    res.send('<h1>¡Mira la terminal!</h1>')
})



// Query strings
router.get('/tienda', (req, res) => {
    console.log('---------')
    console.log('Este es el objeto de Query Strings:', req.query)
    console.log('---------')

    res.send('<h1>¡Mira la terminal!</h1>')
})




// Formulario de búsqueda: renderizar
router.get('/buscador', (req, res) => res.render('pages/search-form'))

// Formulario de búsqueda: resultados
router.get('/resultados', (req, res) => {
    console.log('Estos son los datos:', req.query)
    res.render('pages/search-results', req.query)
})




// Formulario de inicio de sesión (renderizar)
router.get('/inicio-sesion', (req, res) => res.render('pages/login-form'))

// Formulario de inicio de sesión (gestionar)
router.post('/inicio-sesion', (req, res) => {

    const { username, pwd } = req.body

    console.log('---------')
    console.log('Este es el objeto req.body, donde llega la info de las peticiones POST:', req.body)
    console.log('El nombre de usuario es', username)
    console.log('La contraseña es', pwd)
    console.log('---------')

    res.send('<h1>Mira la terminal!</h1>')
})



module.exports = router