# week4_day4


## Main points: Route params & Query strings

- Los Route Params & Query Strings permiten enviar información en una petición de tipo GET desde el navegador al servidor, a través de la URL.
  ````javascript
  // URL: http://localhost:3000/endpoint/value1/whatever/value2?color=white&adults=no

  router.get('/endpoint/:param1/whatever/:param2', (req, res) => {

    console.log(req.params)   // { param1: 'value1', param2: 'value2' }
    console.log(req.query)    // { color: 'white', adults: 'no' }
  })
  ````

## Main points: Request body
- El objeto `req.body` contiene la información enviada mediante una petición de tipo `POST` desde el navegador al servidor.
- Cada clave del objeto es el valor del atributo `name` del `input`, asumiendo como su valor el del propio `input`.


## Main points: *seeding*
- Crear un archivo dotado de:
   - Conexión a la BBDD (misma BBDD de la aplicación)
   - Modelo
   - Operación para la creación de los registros
   - Desconexión de la base de datos
   
- Ejecutar el archivo mediante `node`
  
## Apuntes finales
- La etiqueta `form` dispone de dos atributos: `action` (destino de la información) y `method` (método de envío)
- Crear un formulario integrado en una aplicación web supone revisar tres aspectos fundamentales:
  - Valor del atributo `action`del formulario.
  - Valor del atributo `method` del formulario.
  - Valor del atributo `name` de cada input de formulario. 
- Es posible disponer de dos controladores para un mismo *endpoint* (`GET`/`POST`)
- Express puede acceder al `req.body` de las peticiones `POST` gracias a la dependencia `Body Parser`
