<a id="Home"> </a>
![Home](https://github.com/neollob/node-project/blob/master/readme-imgs/favicon.ico)
# Proyecto: Application MEAN Full-stack: Back-End - TheTraktor® Admin Panel

1. [Presentación](#Presentación)
2. [Introducción](#Introducción)
3. [Primera iteración](#Primera_iteración)
4. [Índices](#Índices)
5. [Test _Postman_](#Postman)

---
## <a id="Presentación"></a>Presentación ##

https://slides.com/armandrodgo/deck-2/live

---

## <a id="Introducción"></a>Introducción ##

### Cliente: TheTraktor®

Empresa dedicada a la formación, instrucción e impartición de entrenamientos en la especialidad del **CrossFit®**.

## Descripción

***TheTraktor®*** es una plataforma de entrenamiento, es la culminación de toda nuestra formación y experiencia en el entrenamiento, plasmada sobre una programación, ayudándoos a mejorar como atletas, tanto físico como mentalmente. De esta manera, conseguiremos alcanzar todos aquellos retos personales que os hayáis planteado.

Son muchos años viviendo en primera persona el **CrossFit®** al más alto nivel, y tenemos muy claro el trabajo que hay que llevar a cabo, tanto a nivel físico como mental, para optimizar al máximo el rendimiento de este complejo deporte.

- Hemos iniciado el desarrollo de la plataforma de administración de los clientes (_customers_) y sus contenidos (_products_: _plans_ y _packs_). El acceso a la aplicacion está restringido a los usuarios administadores (_users_).

Esta plataforma de administración se vincula con la **App de Usuarios**, que será descagable para **Android** y **IOs**.

Desarrollada en *Angular* - *Ionic* - *Rest Api* y *MongoDB*

Desde esta se darán de alta, con sus datos personales, foto y plan. Ocasionalmente el administrador podrá editar su cuenta o subirlo al plan _VIP_.

- En posteriores iteraciones a Products se añadirá Merchandissing, mediante tienda online.

En el curso Mean-Stack 2, construimos la parte de  de una aplicación full-stack. En Mean-Stack 3, hemos construido el Back-End utilizando Node.js, Express.js y MongoDB.

El proyecto consiste en crear una API Rest funcional. Esta API expondrá una serie de end-points que podrán ser consumidos por la aplicación de Front-end.

__Aplicación Angular__: Alojamiento propio: https://admin.thetraktor.com/ (Front-End Responsive)

__Github Page__: https://neollob.github.io/thetraktor-admin/

__API Rest funcional__:  Heroku: https://thetraktor.herokuapp.com/

	Region      United States

	Stack       heroku-18

	Framework   Node.js

	Slug Size   23.2 MiB of 500 MiB


El objetivo de la aplicación es la de poder administrar vía web el ecosistema de ***TheTraktor®***.

La aplicación esta pensada para:

- Gestión de clientes: Introducción, edición, listados con filtros (por Nombre, por Plan o Activos - Inactivos.
- Gestión de productos - planes: Listar planes.
- Gestión de usuarios administradores: Login y Registro.
- Gestión de Tareas por realizar: Listado de Tareas y estado.

[Volver a inicio](#Home)

---

## <a id="Primera_iteración"></a>Primera iteración ##

En una primera fase de desarrollo se ha desarrollado el CRUD completo de los clientes 

- Clientes
    - Listado de clientes
    - Detalle
    - Edicion
    - Añadir 
- Planes
    - Listado de planes

### Pagina principal

![Home](https://github.com/neollob/node-project/blob/master/readme-imgs/Home.png)

### Login Page

![login](https://github.com/neollob/node-project/blob/master/readme-imgs/Login.png)

![loging](https://github.com/neollob/node-project/blob/master/readme-imgs/Logging.png)

### Errors Validation Login Page

#### Invalid Email

![login Invalid Email](https://github.com/neollob/node-project/blob/master/readme-imgs/Invalid-email.png)

#### Unauthorized

![login Unauthorized](https://github.com/neollob/node-project/blob/master/readme-imgs/Validation-Unauthorized-login.png)

### Pagina principal Logged

![Home Logged](https://github.com/neollob/node-project/blob/master/readme-imgs/home-logged.png)

### Listado de clientes

![Listado de clientes](https://github.com/neollob/node-project/blob/master/readme-imgs/Customers.png)

### Detalle de cliente

![Detalle de cliente](https://github.com/neollob/node-project/blob/master/readme-imgs/Customer-detail.png)

### Edición de cliente

![Edición de cliente](https://github.com/neollob/node-project/blob/master/readme-imgs/edit-customer.png)

### Alta de cliente

![Alta de cliente](https://github.com/neollob/node-project/blob/master/readme-imgs/Create-customer.png)

![Alta de cliente1](https://github.com/neollob/node-project/blob/master/readme-imgs/creating-customer1.png)

![Alta de cliente2](https://github.com/neollob/node-project/blob/master/readme-imgs/creating-customer2.png)

### Listado de Planes

![Producto: Planes](https://github.com/neollob/node-project/blob/master/readme-imgs/Products-Plans.png)

### Sección ToDo (Tareas desarrollo - estado)

![To-Do](https://github.com/neollob/node-project/blob/master/readme-imgs/Todo-section.png)

[Volver a inicio](#Home)

---

## <a id="Índices"></a>Índices ##

Indices aplicados sobre la busqueda de usuarios por nombre, apellidos y plan

>db.customers.createIndex({"name.first":"text", "name.last":"text"})

>db.customers.createIndex({"plan":1})

```
[
        {
            "v" : 2,
            "key" : {
                "_id" : 1
            },
            "name" : "_id_",
            "ns" : "test.customers"
        },
        {
            "v" : 2,
            "key" : {
                "_fts" : "text",
                "_ftsx" : 1
            },
            "name" : "name.first_text_name.last_text",
            "ns" : "test.customers",
            "weights" : {
                "name.first" : 1,
                "name.last" : 1
            },
            "default_language" : "english",
            "language_override" : "language",
            "textIndexVersion" : 3
        },
        {
            "v" : 2,
            "key" : {
                "plan" : 1
            },
            "name" : "plan_1",
            "ns" : "test.customers"
        }
]
```

[Volver a inicio](#Home)

---

## <a id="Postman"></a>Test - _Postman_ ##

- [POST Signup](#POST_Signup)
- [POST Login](#POST_Login)
- [GET Get usuarios](#GET_Get_usuarios)
- [GET Get usuarios inactivos](#GET_Get_usuarios_inactivos)
- [POST Post usuario nuevo](#POST_Post_usuario_nuevo)
- [GET Get usuario por `id`](#GET_Get_usuario_por_id)
- [PUT Put usuario por `id`](#PUT_Put_usuario_por_id)
- [DELETE Delete usuario](#DELETE_Delete_usuario)
- [GET Get usuario por Plan](#GET_Get_usuario_por_Plan)
- [DELETE Delete packs del usuario](#DELETE_Delete_packs_del_usuario)
- [GET Get plans](#GET_Get_plans)
- [POST Post plans](#POST_Post_plans)
- [PUT Put plans por `id`](#PUT_Put_plan_por_id)
- [DELETE Delete plans por `id`](#DELETE_Delete_plan_por_id)
- [GET Get packs](#GET_Get_packs)
- [POST Post packs](#POST_Post_packs)
- [GET Get packs por `id`](#GET_Get_packs_por_id)
- [PUT Put pack por `id`](#PUT_Put_pack_por_id)
- [DELETE Delete pack por `id`](#DELETE_Delete_pack_por_id)
- [GET Get ToDoes](#GET_Get_ToDoes)
- [GET Get ToDoes por `id`](#GET_Get_ToDoes_por_id)
- [PUT Put ToDo por `id`](#PUT_Put_ToDo_por_id)
- [POST Post ToDo](#POST_Post_ToDo)
- [DELETE Delete ToDo por `id`](#DELETE_Delete_ToDo_por_id)


[Volver a inicio](#Home)


## <a id="POST_Signup"></a>POST Signup ##


>https://thetraktor.herokuapp.com/user/signup

**Headers**

>Content-Type	application/json

**Body** raw (application/json)

    {
        "name":"dani",
        "email":"dani@estudiosdwi.com",
        "password":"12345678"
    }

Example Request _Signup_

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
      'method': 'POST',
      'hostname': 'thetraktor.herokuapp.com',
      'path': '/user/signup',
      'headers': {
        'Content-Type': 'application/json'
      },
      'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });

      res.on("error", function (error) {
        console.error(error);
      });
    });

    var postData =  "{\n\t\"name\":\"dani\",\n\t\"email\":\"dani@estudiosdwi.com\",\n\t\"password\":\"12345678\"\n}";

    req.write(postData);

    req.end();

Example Response    200 OK

    {
        "_id": "5dc696ac8fa790727db26772",
        "name": "dani",
        "email": "dani@estudiosdwi.com",
        "password": "$2b$10$0N9XA/OOqrtGZ.bF5eFn4.CGTD5CMIo6zTOjA9m0LWcaRGPpfa4Se",
        "__v": 0
    }



[Volver a submenu Test _Postman_](#Postman)

## <a id="POST_Login"></a>POST Login ##


>https://thetraktor.herokuapp.com/user/login

enviamos mail y password para logarse y obtener token

**Headers**

>Content-Type	application/json
    
**Body** raw (application/json)

    {
        "name":"dani",
        "email":"dani@estudiosdwi.com",
        "password":"12345678"
    }

Example Request Login

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
      'method': 'POST',
      'hostname': 'thetraktor.herokuapp.com',
      'path': '/user/login',
      'headers': {
        'Content-Type': 'application/json'
      },
      'maxRedirects': 20
    };

    var req = http.request(options, function (res) {

Example Response    200 OK

    {
      "user": {
        "_id": "5dc16e48b6afda1bec142360",
        "name": "dani",
        "email": "dani@estudiosdwi.com",
        "password": "$2b$10$w7WQkNNqPnNg/591oEKuuu/dBbE9ph0OI9rfvD1EQsE/SMrMyRkpO",
        "__v": 0
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzE2ZTQ4YjZhZmRhMWJlYzE0MjM2MCIsImlhdCI6MTU3MzIwNjk1NywiZXhwIjoxNTc1Nzk4OTU3fQ.HvelhvYmrY75NRkTRupvfCuaFqPhu9LarUj2HeNuw0Y"
    }
[Volver a submenu Test _Postman_](#Postman)

## <a id="GET_Get_usuarios"></a>GET Get usuarios ## 

>https://thetraktor.herokuapp.com/customers

lista los usuarios activos

**Headers**

>Content-Type	application/json

Body raw (application/json)

	{ }

Example Request Get usuarios

```
var http = require('follow-redirects').http;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'localhost',
  'port': 3000,
  'path': '/customers',
  'headers': {
    'Content-Type': 'application/json'
  },
  'maxRedirects': 20
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData =  "    { }";

req.write(postData);

req.end();
```
[Volver a submenu Test _Postman_](#Postman)

## <a id="GET_Get_usuarios_inactivos"></a>GET Get usuarios inactivos ##

>https://thetraktor.herokuapp.com/customers/inactive

Listar usuarios inactivos

**Headers**

>Content-Type	application/json

**Body** raw (application/json)

    { }

Example Request Get usuarios inactivos

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
      'method': 'GET',
      'hostname': 'thetraktor.herokuapp.com',
      'path': '/customers/inactive',
      'headers': {
        'Content-Type': 'application/json'
      },
      'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });

      res.on("error", function (error) {
        console.error(error);
      });
    });

    var postData =  "    { }";

    req.write(postData);

    req.end();

Example Response    200 OK

    [
      {
        "name": {
          "first": "BENITA",
          "last": "Navarro"
        },
        "packs": [
          {
            "customers": [],
            "_id": "5dc0b3d3b73fc84c308441eb",
            "name": "DEFINITION",
            "image": "Pack-Definition.png",
            "price": 10.95,
            "description": "Lorem ipsum Dolor"
          },
          {
            "customers": [],
            "_id": "5dc0b37db73fc84c308441e8",
            "name": "RUNNING",
            "image": "Pack-running.png",
            "price": 10.95,
            "description": "Lorem ipsum Dolor"
          }
        ],
        "_id": "5dc11a5903bf2803b71b7fd1",
        "user_id": "8f0eb26a-4603-4ecc-91bf-76b561078d97",
        "index": 4,
        "isActive": false,
        "gender": "female",
        "picture": "https://randomuser.me/api/portraits/med/women/12.jpg",
        "birth": "2014-02-01T12:44:41 -01:00",
        "email": "benitanavarro@centice.com",
        "address": "Allentown",
        "password": "5dc118008e8751b0d3b7c475",
        "weight": 106.44,
        "height": 198.52,
        "registered": "2019-11-05T19:28:16.451Z",
        "box": "Crossfit",
        "plan": {
          "customers": [],
          "_id": "5dc0b75eb73fc84c308441ef",
          "name": "ÉLITE",
          "price": 10.95,
          "index": 1,
          "icon": "elite.svg",
          "options": [
            {
              "_id": "5dc0b6ac63d6814c30992aa6",
              "option": "Acceso a sesión completa"
            },
            {
              "option": "Acceso a sesión completa",
              "_id": "5dc0b72863d6814c30992aa7"
            },
            {
              "option": "Acceso a sesión completa",
              "_id": "5dc0b73663d6814c30992aa8"
            }
          ]
        },
        "packList": "DEFINITION / RUNNING"
      },
      {
        "name": {
          "first": "Johnston",
          "last": "Craig"
        },
        "packs": [
          {
            "customers": [],
            "_id": "5dc0b3d3b73fc84c308441eb",
            "name": "DEFINITION",
            "image": "Pack-Definition.png",
            "price": 10.95,
            "description": "Lorem ipsum Dolor"
          },
          {

          ...
[Volver a submenu Test _Postman_](#Postman)

## <a id="POST_Post_usuario_nuevo"></a>POST Post usuario nuevo ##

>https://thetraktor.herokuapp.com/customers

Inserta un nuevo usuario en la colection customers En el campo plan y packs solo guarda los 'id' de los planes y packs

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    {
        "name": {
            "first": "Elle",
            "last": "McPherson"
        },
        "packs": [
            {
                "customers": [],
                "_id": "5dc0b3d3b73fc84c308441eb",
                "name": "DEFINITION",
                "image": "Pack-Definition.png",
                "price": 10.95,
                "description": "Lorem ipsum Dolor"
            },
            {
                "customers": [],
                "_id": "5dc0b37db73fc84c308441e8",
                "name": "RUNNING",
                "image": "Pack-running.png",
                "price": 10.95,
                "description": "Lorem ipsum Dolor"
            }
        ],
        "user_id": "8f0eb26a-4603-4ecc-91bf-76b561078d97",
        "index": 4,
        "isActive": false,
        "gender": "female",
        "picture": "https://randomuser.me/api/portraits/med/women/52.jpg",
        "birth": "2014-02-01T12:44:41 -01:00",
        "email": "benitanavarro@centice.com",
        "address": "Allentown",
        "password": "5dc118008e8751b0d3b7c475",
        "weight": 106.44,
        "height": 198.52,
        "registered": "2019-11-05T19:28:16.451Z",
        "box": "Crossfit",
        "plan": {
            "customers": [],
            "_id": "5dc0b75eb73fc84c308441ef",
            "name": "ÉLITE",
            "price": 10.95,
            "index": 1,
            "icon": "elite.svg",
            "options": [
                {
                    "_id": "5dc0b6ac63d6814c30992aa6",
                    "option": "Acceso a sesión completa"
                },
                {
                    "option": "Acceso a sesión completa",
                    "_id": "5dc0b72863d6814c30992aa7"
                },
                {
                    "option": "Acceso a sesión completa",
                    "_id": "5dc0b73663d6814c30992aa8"
                }
            ]
        },
        "packList": "DEFINITION / RUNNING"
    }

Example Request Post usuario nuevo

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
      'method': 'POST',
      'hostname': 'thetraktor.herokuapp.com',
      'path': '/customers',
      'headers': {
        'Content-Type': 'application/json'
      },
      'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });

      res.on("error", function (error) {
        console.error(error);
      });
    });

    var postData =  "    {\n        \"name\": {\n            \"first\": \"Elle\",\n            \"last\": \"McPherson\"\n        },\n        \"packs\": [\n            {\n                \"customers\": [],\n                \"_id\": \"5dc0b3d3b73fc84c308441eb\",\n                \"name\": \"DEFINITION\",\n                \"image\": \"Pack-Definition.png\",\n                \"price\": 10.95,\n                \"description\": \"Lorem ipsum Dolor\"\n            },\n            {\n                \"customers\": [],\n                \"_id\": \"5dc0b37db73fc84c308441e8\",\n                \"name\": \"RUNNING\",\n                \"image\": \"Pack-running.png\",\n                \"price\": 10.95,\n                \"description\": \"Lorem ipsum Dolor\"\n            }\n        ],\n        \"user_id\": \"8f0eb26a-4603-4ecc-91bf-76b561078d97\",\n        \"index\": 4,\n        \"isActive\": false,\n        \"gender\": \"female\",\n        \"picture\": \"https://randomuser.me/api/portraits/med/women/52.jpg\",\n        \"birth\": \"2014-02-01T12:44:41 -01:00\",\n        \"email\": \"benitanavarro@centice.com\",\n        \"address\": \"Allentown\",\n        \"password\": \"5dc118008e8751b0d3b7c475\",\n        \"weight\": 106.44,\n        \"height\": 198.52,\n        \"registered\": \"2019-11-05T19:28:16.451Z\",\n        \"box\": \"Crossfit\",\n        \"plan\": {\n            \"customers\": [],\n            \"_id\": \"5dc0b75eb73fc84c308441ef\",\n            \"name\": \"ÉLITE\",\n            \"price\": 10.95,\n            \"index\": 1,\n            \"icon\": \"elite.svg\",\n            \"options\": [\n                {\n                    \"_id\": \"5dc0b6ac63d6814c30992aa6\",\n                    \"option\": \"Acceso a sesión completa\"\n                },\n                {\n                    \"option\": \"Acceso a sesión completa\",\n                    \"_id\": \"5dc0b72863d6814c30992aa7\"\n                },\n                {\n                    \"option\": \"Acceso a sesión completa\",\n                    \"_id\": \"5dc0b73663d6814c30992aa8\"\n                }\n            ]\n        },\n        \"packList\": \"DEFINITION / RUNNING\"\n    }";

    req.write(postData);

    req.end();

Example Response    200 OK

    {
      "name": {
        "first": "ELLE",
        "last": "McPherson"
      },
      "packs": [
        "5dc0b3d3b73fc84c308441eb",
        "5dc0b37db73fc84c308441e8"
      ],
      "_id": "5dc698668fa790727db26774",
      "registered": "2019-11-05T19:28:16.451Z",
      "index": 4,
      "isActive": false,
      "gender": "female",
      "picture": "https://randomuser.me/api/portraits/med/women/52.jpg",
      "email": "benitanavarro@centice.com",
      "address": "Allentown",
      "weight": 106.44,
      "plan": "5dc0b75eb73fc84c308441ef",
      "packList": "DEFINITION / RUNNING",
      "__v": 0
    }
[Volver a submenu Test _Postman_](#Postman)

## <a id="GET_Get_usuario_por_id"></a>GET Get usuario por `id` ##

>https://thetraktor.herokuapp.com/customers/5dc11a5903bf2803b71b7fe0

Obtiene un usuario pasandole el id como parametro de busqueda

**Headers**

> Content-Type	application/json

**Body**    raw (application/json)

    { }

Example Request Get usuario por `id`

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
      'method': 'GET',
      'hostname': 'thetraktor.herokuapp.com',
      'path': '/customers/5dc11a5903bf2803b71b7fe0',
      'headers': {
        'Content-Type': 'application/json'
      },
      'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });

      res.on("error", function (error) {
        console.error(error);
      });
    });

    var postData =  "    { }";

    req.write(postData);

    req.end();

Example Response    200 OK

    {
        "name": {
            "first": "Natasha",
            "last": "Skinner"
        },
        "packs": [
            {
                "customers": [],
                "_id": "5dc0b2f063d6814c30992aa3",
                "name": "COMPETITION",
                "image": "Pack-Competition.png",
                "price": 10.95,
                "description": "Lorem ipsum Dolor"
            },
            {
                "customers": [],
                "_id": "5dc0b416b73fc84c308441ee",
                "name": "BARS",
                "image": "Pack-Bars.png",
                "price": 10.95,
                "description": "Lorem ipsum Dolor"
            }
        ],
        "_id": "5dc11a5903bf2803b71b7fe0",
        "user_id": "afcbc910-b478-4d8b-89a4-5c4e427113ea",
        "index": 20,
        "isActive": true,
        "gender": "female",
        "picture": "https://randomuser.me/api/portraits/med/women/84.jpg",
        "birth": "2014-06-03T11:37:30 -02:00",
        "email": "natashaskinner@centice.com",
        "address": "Ilchester",
        "password": "5dc118001676049878d3ddd6",
        "weight": 79.21,
        "height": 174.49,
        "box": "Crossfit",
        "plan": {
            "customers": [],
            "_id": "5dc0b64063d6814c30992aa5",
            "name": "BUILDER",
            "price": 10.95,
            "index": 5,
            "icon": "builder.svg",
            "options": [
                {
                    "_id": "5dc0b6ac63d6814c30992aa6",
                    "option": "Acceso a sesión completa"
                },
                {
                    "option": "Acceso a sesión completa",
                    "_id": "5dc0b72863d6814c30992aa7"
                },
                {
                    "option": "Acceso a sesión completa",
                    "_id": "5dc0b73663d6814c30992aa8"
                }
            ]
        },
        "registered": "2019-11-09T11:06:09.442Z",
        "packList": "COMPETITION / BARS"
    }

[Volver a submenu Test _Postman_](#Postman)

## <a id="PUT_Put_usuario_por_id"></a>PUT Put usuario por `id` ##

>https://thetraktor.herokuapp.com/customers/5dc11a5903bf2803b71b7fe0

Actualiza los datos del documento pasandole el parametro id como indice de busqueda y actualizacion

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    {
        "name": {
            "first": "Patrick",
            "last": "Skinner"
        },
        "packs": [
            {
                "customers": [],
                "_id": "5dc0b2f063d6814c30992aa3",
                "name": "COMPETITION",
                "image": "Pack-Competition.png",
                "price": 10.95,
                "description": "Lorem ipsum Dolor"
            },
            {
                "customers": [],
                "_id": "5dc0b416b73fc84c308441ee",
                "name": "BARS",
                "image": "Pack-Bars.png",
                "price": 10.95,
                "description": "Lorem ipsum Dolor"
            }
        ],
        "_id": "5dc11a5903bf2803b71b7fe0",
        "user_id": "afcbc910-b478-4d8b-89a4-5c4e427113ea",
        "index": 20,
        "isActive": true,
        "gender": "male",
        "picture": "https://randomuser.me/api/portraits/med/men/84.jpg",
        "birth": "2014-06-03T11:37:30 -02:00",
        "email": "natashaskinner@centice.com",
        "address": "Ilchester",
        "password": "5dc118001676049878d3ddd6",
        "weight": 79.21,
        "height": 174.49,
        "box": "Crossfit",
        "plan": {
            "customers": [],
            "_id": "5dc0b64063d6814c30992aa5",
            "name": "BUILDER",
            "price": 10.95,
            "index": 5,
            "icon": "builder.svg",
            "options": [
                {
                    "_id": "5dc0b6ac63d6814c30992aa6",
                    "option": "Acceso a sesión completa"
                },
                {
                    "option": "Acceso a sesión completa",
                    "_id": "5dc0b72863d6814c30992aa7"
                },
                {
                    "option": "Acceso a sesión completa",
                    "_id": "5dc0b73663d6814c30992aa8"
                }
            ]
        },
        "registered": "2019-11-09T11:06:09.442Z",
        "packList": "COMPETITION / BARS"
    }

Example Request Put usuario por `id`

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
      'method': 'PUT',
      'hostname': 'thetraktor.herokuapp.com',
      'path': '/customers/5dc11a5903bf2803b71b7fe0',
      'headers': {
        'Content-Type': 'application/json'
      },
      'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });

      res.on("error", function (error) {
        console.error(error);
      });
    });

    var postData =  "{\n    \"name\": {\n        \"first\": \"Patrick\",\n        \"last\": \"Skinner\"\n    },\n    \"packs\": [\n        {\n            \"customers\": [],\n            \"_id\": \"5dc0b2f063d6814c30992aa3\",\n            \"name\": \"COMPETITION\",\n            \"image\": \"Pack-Competition.png\",\n            \"price\": 10.95,\n            \"description\": \"Lorem ipsum Dolor\"\n        },\n        {\n            \"customers\": [],\n            \"_id\": \"5dc0b416b73fc84c308441ee\",\n            \"name\": \"BARS\",\n            \"image\": \"Pack-Bars.png\",\n            \"price\": 10.95,\n            \"description\": \"Lorem ipsum Dolor\"\n        }\n    ],\n    \"_id\": \"5dc11a5903bf2803b71b7fe0\",\n    \"user_id\": \"afcbc910-b478-4d8b-89a4-5c4e427113ea\",\n    \"index\": 20,\n    \"isActive\": true,\n    \"gender\": \"male\",\n    \"picture\": \"https://randomuser.me/api/portraits/med/men/84.jpg\",\n    \"birth\": \"2014-06-03T11:37:30 -02:00\",\n    \"email\": \"natashaskinner@centice.com\",\n    \"address\": \"Ilchester\",\n    \"password\": \"5dc118001676049878d3ddd6\",\n    \"weight\": 79.21,\n    \"height\": 174.49,\n    \"box\": \"Crossfit\",\n    \"plan\": {\n        \"customers\": [],\n        \"_id\": \"5dc0b64063d6814c30992aa5\",\n        \"name\": \"BUILDER\",\n        \"price\": 10.95,\n        \"index\": 5,\n        \"icon\": \"builder.svg\",\n        \"options\": [\n            {\n                \"_id\": \"5dc0b6ac63d6814c30992aa6\",\n                \"option\": \"Acceso a sesión completa\"\n            },\n            {\n                \"option\": \"Acceso a sesión completa\",\n                \"_id\": \"5dc0b72863d6814c30992aa7\"\n            },\n            {\n                \"option\": \"Acceso a sesión completa\",\n                \"_id\": \"5dc0b73663d6814c30992aa8\"\n            }\n        ]\n    },\n    \"registered\": \"2019-11-09T11:06:09.442Z\",\n    \"packList\": \"COMPETITION / BARS\"\n}";

    req.write(postData);

    req.end();

Example Response    200 OK

    {
        "name": {
            "first": "PATRICK",
            "last": "Skinner"
        },
        "packs": [
            "5dc0b2f063d6814c30992aa3",
            "5dc0b416b73fc84c308441ee"
        ],
        "_id": "5dc11a5903bf2803b71b7fe0",
        "user_id": "afcbc910-b478-4d8b-89a4-5c4e427113ea",
        "index": 20,
        "isActive": true,
        "gender": "male",
        "picture": "https://randomuser.me/api/portraits/med/men/84.jpg",
        "birth": "2014-06-03T11:37:30 -02:00",
        "email": "natashaskinner@centice.com",
        "address": "Ilchester",
        "password": "5dc118001676049878d3ddd6",
        "weight": 79.21,
        "height": 174.49,
        "registered": "2019-11-09T11:06:09.442Z",
        "box": "Crossfit",
        "plan": {
            "customers": [],
            "_id": "5dc0b64063d6814c30992aa5",
            "name": "BUILDER",
            "price": 10.95,
            "index": 5,
            "icon": "builder.svg",
            "options": [
                {
                    "_id": "5dc0b6ac63d6814c30992aa6",
                    "option": "Acceso a sesión completa"
                },
                {
                    "option": "Acceso a sesión completa",
                    "_id": "5dc0b72863d6814c30992aa7"
                },
                {
                    "option": "Acceso a sesión completa",
                    "_id": "5dc0b73663d6814c30992aa8"
                }
            ]
        },
        "packList": " / "
    }

[Volver a submenu Test _Postman_](#Postman)

## <a id="DELETE_Delete_usuario"></a>DELETE Delete usuario ##

>https://thetraktor.herokuapp.com/customers/5dc6a30ad55a507cc296e223

Elimina un usuario pasandole el id como parametro de busqueda y destruccion

**Headers**

>Content-Type	application/json

**Body** raw (application/json)

    { }

[Volver a submenu Test _Postman_](#Postman)

## <a id="GET_Get_usuario_por_Plan"></a>GET Get usuario por Plan ##

>https://thetraktor.herokuapp.com/customers/plan/5dc0b64063d6814c30992aa5

Obtiene el listado de usuarios de un plan en concreto pasandole el parametro id del plan

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    { }

Example Request Get usuario por `plan`

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
      'method': 'GET',
      'hostname': 'thetraktor.herokuapp.com',
      'path': '/customers/plan/5dc0b64063d6814c30992aa5',
      'headers': {
        'Content-Type': 'application/json'
      },
      'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });

      res.on("error", function (error) {
        console.error(error);
      });
    });

    var postData =  "    { }";

    req.write(postData);

    req.end();

Example Response    200 OK

    [
      {
        "name": {
          "first": "Elisa",
          "last": "Black"
        },
        "packs": [
          {
            "customers": [],
            "_id": "5dc0b39cb73fc84c308441e9",
            "name": "ENDURANCE",
            "image": "Pack-endurance.png",
            "price": 10.95,
            "description": "Lorem ipsum Dolor"
          }
        ],
        "_id": "5dc11a5903bf2803b71b7fd3",
        "user_id": "010cd950-f449-4084-8ab4-5e828da249fe",
        "index": 7,
        "isActive": true,
        "gender": "female",
        "picture": "https://randomuser.me/api/portraits/med/women/61.jpg",
        "birth": "2015-07-20T08:57:28 -02:00",
        "email": "elisablack@centice.com",
        "address": "Campo",
        "password": "5dc11800f6469dfa19951fe1",
        "weight": 61.71,
        "height": 193.77,
        "box": "Crossfit",
        "plan": {
          "customers": [],
          "_id": "5dc0b64063d6814c30992aa5",
          "name": "BUILDER",
          "price": 10.95,
          "index": 5,
          "icon": "builder.svg",
          "options": [
            {
              "_id": "5dc0b6ac63d6814c30992aa6",
              "option": "Acceso a sesión completa"
            },
            {
              "option": "Acceso a sesión completa",
              "_id": "5dc0b72863d6814c30992aa7"
            },
            {
              "option": "Acceso a sesión completa",
              "_id": "5dc0b73663d6814c30992aa8"
            }
          ]
        },
        "registered": "2019-11-09T11:32:51.550Z",
        "packList": "ENDURANCE"
      },
      {
        "name": {
    ...

[Volver a submenu Test _Postman_](#Postman)

## <a id="GET_Get_usuario_por_Plan"></a>GET Get usuario por Plan ##

>https://thetraktor.herokuapp.com/customers/plan/5dc0b64063d6814c30992aa5

Obtiene el listado de usuarios de un plan en concreto pasandole el parametro id del plan

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)
    {}
    
Get usuario por plan 

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
      'method': 'GET',
      'hostname': 'thetraktor.herokuapp.com',
      'path': '/customers/plan/5dc0b64063d6814c30992aa5',
      'headers': {
        'Content-Type': 'application/json'
      },
      'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });

      res.on("error", function (error) {
        console.error(error);
      });
    });

    var postData =  "    { }";

    req.write(postData);

    req.end();

Example response    200 OK

    [
      {
        "name": {
          "first": "Elisa",
          "last": "Black"
        },
        "packs": [
          {
            "customers": [],
            "_id": "5dc0b39cb73fc84c308441e9",
            "name": "ENDURANCE",
            "image": "Pack-endurance.png",
            "price": 10.95,
            "description": "Lorem ipsum Dolor"
          }
        ],
        "_id": "5dc11a5903bf2803b71b7fd3",
        "user_id": "010cd950-f449-4084-8ab4-5e828da249fe",
        "index": 7,
        "isActive": true,
        "gender": "female",
        "picture": "https://randomuser.me/api/portraits/med/women/61.jpg",
        "birth": "2015-07-20T08:57:28 -02:00",
        "email": "elisablack@centice.com",
        "address": "Campo",
        "password": "5dc11800f6469dfa19951fe1",
        "weight": 61.71,
        "height": 193.77,
        "box": "Crossfit",
        "plan": {
          "customers": [],
          "_id": "5dc0b64063d6814c30992aa5",
          "name": "BUILDER",
          "price": 10.95,
          "index": 5,
          "icon": "builder.svg",
          "options": [
            {
              "_id": "5dc0b6ac63d6814c30992aa6",
              "option": "Acceso a sesión completa"
            },
            {
              "option": "Acceso a sesión completa",
              "_id": "5dc0b72863d6814c30992aa7"
            },
            {
              "option": "Acceso a sesión completa",
              "_id": "5dc0b73663d6814c30992aa8"
            }
          ]
        },
        "registered": "2019-11-09T11:32:51.550Z",
        "packList": "ENDURANCE"
      },
      {
        "name": {
          "first": "Bettie",
    ...

[Volver a submenu Test _Postman_](#Postman)

## <a id="DELETE_Delete_packs_del_usuario"></a>DELETE Delete packs del usuario ##

>https://thetraktor.herokuapp.com/customers/5dc11a5903bf2803b71b7fce/packs

Elimina los packs del usuario pasandole el paramentro id como parametro de busqueda y actualizacion

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    { }

Example Request Delete packs del usuario

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
      'method': 'DELETE',
      'hostname': 'thetraktor.herokuapp.com',
      'path': '/customers/5dc11a5903bf2803b71b7fce/packs',
      'headers': {
        'Content-Type': 'application/json'
      },
      'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });

      res.on("error", function (error) {
        console.error(error);
      });
    });

    var postData =  "    { }";

    req.write(postData);

    req.end();


Example Response    200 OK

    {
        "name": {
            "first": "MALINDA",
            "last": "Booth"
        },
        "packs": [],
        "_id": "5dc11a5903bf2803b71b7fce",
        "user_id": "d8b6bd04-97e5-4bfb-bce2-8aba10725c72",
        "index": 1,
        "isActive": true,
        "gender": "female",
        "picture": "https://randomuser.me/api/portraits/med/women/87.jpg",
        "birth": "2016-12-06T08:40:48 -01:00",
        "email": "malindabooth@centice.com",
        "address": "Hondah",
        "password": "5dc1180055fc0cc39cd8a671",
        "weight": 94.91,
        "height": 174.81,
        "registered": "2019-11-05T23:16:04.693Z",
        "box": "Crossfit",
        "plan": {
            "customers": [],
            "_id": "5dc0b7a4b73fc84c308441f2",
            "name": "BASIC",
            "price": 10.95,
            "index": 4,
            "icon": "kettlebell.svg",
            "options": [
                {
                    "_id": "5dc0b6ac63d6814c30992aa6",
                    "option": "Acceso a sesión completa"
                },
                {
                    "option": "Acceso a sesión completa",
                    "_id": "5dc0b72863d6814c30992aa7"
                },
                {
                    "option": "Acceso a sesión completa",
                    "_id": "5dc0b73663d6814c30992aa8"
                }
            ]
        },
        "packList": ""
    }

[Volver a submenu Test _Postman_](#Postman)

## <a id="GET_Get_plans"></a>GET Get plans ##

>https://thetraktor.herokuapp.com/plans/

Lista los documentos de la coleccion planes

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    { }

Example Request Get plans

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
      'method': 'GET',
      'hostname': 'thetraktor.herokuapp.com',
      'path': '/plans/',
      'headers': {
        'Content-Type': 'application/json'
      },
      'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });

      res.on("error", function (error) {
        console.error(error);
      });
    });

    var postData =  "    { }";

    req.write(postData);

    req.end();

Example Response    200 OK

    [
    {
        "customers": [],
        "_id": "5dc29ca21c9d4400007dd917",
        "name": "VIP",
        "price": 0,
        "index": 0,
        "icon": "vip.png",
        "options": [
        {
            "_id": "5dc0b6ac63d6814c30992aa6",
            "option": "Acceso a sesión completa"
        },
        {
            "option": "Acceso a sesión completa",
            "_id": "5dc0b72863d6814c30992aa7"
        },
        {
            "option": "Acceso a sesión completa",
            "_id": "5dc0b73663d6814c30992aa8"
        }
        ]
    },
    {
        "customers": [],
        "_id": "5dc0b75eb73fc84c308441ef",
        "name": "ÉLITE",
        "price": 10.95,
        "index": 1,
        "icon": "elite.svg",
        "options": [
        {
            "_id": "5dc0b6ac63d6814c30992aa6",
            "option": "Acceso a sesión completa"
        },
        {
            "option": "Acceso a sesión completa",
            "_id": "5dc0b72863d6814c30992aa7"
        },
        {
            "option": "Acceso a sesión completa",
            "_id": "5dc0b73663d6814c30992aa8"
        }
        ]
    },
    ...

[Volver a submenu Test _Postman_](#Postman)

## <a id="POST_Post_plans"></a>POST Post plans ##

>https://thetraktor.herokuapp.com/plans/

Añade un nuevo dccumento a la coleccion plan

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

	{
        "customers": [],
        "name": "ONE",
        "price": 10.95,
        "index": 6,
        "icon": "one.png",
        "options": [
            {
                "_id": "5dc0b6ac63d6814c30992aa6",
                "option": "Acceso a sesión completa"
            },
            {
                "option": "Acceso a sesión completa",
                "_id": "5dc0b72863d6814c30992aa7"
            },
            {
                "option": "Acceso a sesión completa",
                "_id": "5dc0b73663d6814c30992aa8"
            }
        ]
    }

Example Request Post plans

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
    'method': 'POST',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/plans/',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    var postData =  "\t{\n        \"customers\": [],\n        \"name\": \"ONE\",\n        \"price\": 10.95,\n        \"index\": 6,\n        \"icon\": \"one.png\",\n        \"options\": [\n            {\n                \"_id\": \"5dc0b6ac63d6814c30992aa6\",\n                \"option\": \"Acceso a sesión completa\"\n            },\n            {\n                \"option\": \"Acceso a sesión completa\",\n                \"_id\": \"5dc0b72863d6814c30992aa7\"\n            },\n            {\n                \"option\": \"Acceso a sesión completa\",\n                \"_id\": \"5dc0b73663d6814c30992aa8\"\n            }\n        ]\n    }";

    req.write(postData);

    req.end();

Example Response    200 OK

    {
        "customers": [],
        "_id": "5dc6afe5d6c75309570eaec7",
        "options": [
            {
                "_id": "5dc0b6ac63d6814c30992aa6",
                "option": "Acceso a sesión completa"
            },
            {
                "_id": "5dc0b72863d6814c30992aa7",
                "option": "Acceso a sesión completa"
            },
            {
                "_id": "5dc0b73663d6814c30992aa8",
                "option": "Acceso a sesión completa"
            }
        ],
        "name": "ONE",
        "price": 10.95,
        "index": 6,
        "icon": "one.png",
        "__v": 0
    }

[Volver a submenu Test _Postman_](#Postman)

## <a id="GET_Get_plans_por_id"></a>GET Get plans por `id` ##

>https://thetraktor.herokuapp.com/plans/5dc29ca21c9d4400007dd917

Obtiene un documento filtrado por id

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    { }

Example Request Get plans por id

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
    'method': 'GET',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/plans/5dc29ca21c9d4400007dd917',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    var postData =  "    { }";

    req.write(postData);

    req.end();

Example Response    200 OK

    {
        "customers": [],
        "_id": "5dc29ca21c9d4400007dd917",
        "name": "VIP",
        "price": 0,
        "index": 0,
        "icon": "vip.png",
        "options": [
            {
                "_id": "5dc0b6ac63d6814c30992aa6",
                "option": "Acceso a sesión completa"
            },
            {
                "option": "Acceso a sesión completa",
                "_id": "5dc0b72863d6814c30992aa7"
            },
            {
                "option": "Acceso a sesión completa",
                "_id": "5dc0b73663d6814c30992aa8"
            }
        ]
    }

[Volver a submenu Test _Postman_](#Postman)

## <a id="PUT_Put_plan_por_id"></a>PUT Put plan por `id` ##

>https://thetraktor.herokuapp.com/plans/5dc29ca21c9d4400007dd917

Actualiza el documento referenciado por id

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    {
        "customers": [],
        "_id": "5dc29ca21c9d4400007dd917",
        "name": "VIP PLUS",
        "price": 0,
        "index": 0,
        "icon": "vip.png",
        "options": [
            {
                "_id": "5dc0b6ac63d6814c30992aa6",
                "option": "Acceso a sesión completa"
            },
            {
                "option": "Acceso a sesión completa",
                "_id": "5dc0b72863d6814c30992aa7"
            },
            {
                "option": "Acceso a sesión completa",
                "_id": "5dc0b73663d6814c30992aa8"
            }
        ]
    }

Example Request Put plan por `id`

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
    'method': 'PUT',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/plans/5dc29ca21c9d4400007dd917',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    var postData =  "{\n    \"customers\": [],\n    \"_id\": \"5dc29ca21c9d4400007dd917\",\n    \"name\": \"VIP PLUS\",\n    \"price\": 0,\n    \"index\": 0,\n    \"icon\": \"vip.png\",\n    \"options\": [\n        {\n            \"_id\": \"5dc0b6ac63d6814c30992aa6\",\n            \"option\": \"Acceso a sesión completa\"\n        },\n        {\n            \"option\": \"Acceso a sesión completa\",\n            \"_id\": \"5dc0b72863d6814c30992aa7\"\n        },\n        {\n            \"option\": \"Acceso a sesión completa\",\n            \"_id\": \"5dc0b73663d6814c30992aa8\"\n        }\n    ]\n}";

    req.write(postData);

    req.end();

Example Response    200 OK

    {
        "customers": [],
        "_id": "5dc29ca21c9d4400007dd917",
        "name": "VIP PLUS",
        "price": 0,
        "index": 0,
        "icon": "vip.png",
        "options": [
            {
                "_id": "5dc0b6ac63d6814c30992aa6",
                "option": "Acceso a sesión completa"
            },
            {
                "_id": "5dc0b72863d6814c30992aa7",
                "option": "Acceso a sesión completa"
            },
            {
                "_id": "5dc0b73663d6814c30992aa8",
                "option": "Acceso a sesión completa"
            }
        ]
    }

[Volver a submenu Test _Postman_](#Postman)

## <a id="DELETE_Delete_plan_por_id"></a>DELETE Delete plan por `id` ##

>https://thetraktor.herokuapp.com/plans/5dc29ca21c9d4400007dd917

Elimina un documento de la coleccion plan referenciado por id

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    { }

Example Request Delete plan por id

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
    'method': 'DELETE',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/plans/5dc29ca21c9d4400007dd917',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    var postData =  "{ }";

    req.write(postData);

    req.end();

Example Response    200 OK

{
  "customers": [],
  "_id": "5dc29ca21c9d4400007dd917",
  "name": "VIP PLUS",
  "price": 0,
  "index": 0,
  "icon": "vip.png",
  "options": [
    {
      "_id": "5dc0b6ac63d6814c30992aa6",

[Volver a submenu Test _Postman_](#Postman)

## <a id="GET_Get_packs"></a>GET Get packs ##

>https://thetraktor.herokuapp.com/packs/

Lista los documentos de la coleccion packs

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    { }

Example Request Get packs

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
    'method': 'GET',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/packs/',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    var postData =  "    { }";

    req.write(postData);

    req.end();

Example Response    200 OK

Get packs

    [
    {
        "customers": [],
        "_id": "5dc0b2f063d6814c30992aa3",
        "name": "COMPETITION",
        "image": "Pack-Competition.png",
        "price": 10.95,
        "description": "Lorem ipsum Dolor"
    },
    {
        "customers": [],
        "_id": "5dc0b37db73fc84c308441e8",
        "name": "RUNNING",
        "image": "Pack-running.png",
        "price": 10.95,
        "description": "Lorem ipsum Dolor"
    },
    {
        "customers": [],
        "_id": "5dc0b39cb73fc84c308441e9",
        "name": "ENDURANCE",
        "image": "Pack-endurance.png",
        "price": 10.95,
        "description": "Lorem ipsum Dolor"
    },
    {
        "customers": [],
        "_id": "5dc0b3b3b73fc84c308441ea",
        "name": "CROSSFIT",
        "image": "Pack-Crossfit.png",
        "price": 10.95,
        "description": "Lorem ipsum Dolor"
    },
    {
        "customers": [],
        "_id": "5dc0b3d3b73fc84c308441eb",
        "name": "DEFINITION",
        "image": "Pack-Definition.png",
        "price": 10.95,
        "description": "Lorem ipsum Dolor"
    },
    {
        "customers": [],
        "_id": "5dc0b3eeb73fc84c308441ec",
        "name": "ENDURANCEPLUS",
        "image": "Pack-EndurancePlus.png",
        "price": 10.95,
        "description": "Lorem ipsum Dolor"
    },
    {
        "customers": [],
        "_id": "5dc0b400b73fc84c308441ed",
        "name": "RECUPERATION",
        "image": "Pack-Recuperation.png",
        "price": 10.95,
        "description": "Lorem ipsum Dolor"
    },
    {
        "customers": [],
        "_id": "5dc0b416b73fc84c308441ee",
        "name": "BARS",
        "image": "Pack-Bars.png",
        "price": 10.95,
        "description": "Lorem ipsum Dolor"
    }
    ]

[Volver a submenu Test _Postman_](#Postman)

## <a id="POST_Post_packs"></a>POST Post packs ##

>https://thetraktor.herokuapp.com/packs/

Crea un nuevo dicumento en la coleccion packs

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    {
        "customers": [],
        "name": "FITNESS",
        "image": "Pack-Fitness.png",
        "price": 10.95,
        "description": "Lorem ipsum Dolor"
    }

Example Request Post packs

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
    'method': 'POST',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/pas/',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    var postData =  "{\n    \"customers\": [],\n    \"name\": \"FITNESS\",\n    \"image\": \"Pack-Fitness.png\",\n    \"price\": 10.95,\n    \"description\": \"Lorem ipsum Dolor\"\n}";

    req.write(postData);

    req.end();

Example Response    200 OK

    {
        "customers": [],
        "_id": "5dc6af79d6c75309570eaec6",
        "name": "FITNESS",
        "image": "Pack-Fitness.png",
        "price": 10.95,
        "description": "Lorem ipsum Dolor",
        "__v": 0
    }

[Volver a submenu Test _Postman_](#Postman)

## <a id="GET_Get_packs_por_id"></a>GET Get packs por `id` ##

>https://thetraktor.herokuapp.com/packs/5dc6af79d6c75309570eaec6

Obtiene un documento de la coleccion packs pasandole el parametro id para buscar y listar

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    { }

Example Request Get packs por id

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
    'method': 'GET',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/packs/5dc6af79d6c75309570eaec6',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    var postData =  "{ }";

    req.write(postData);

    req.end();

Example Response    200 OK

    {
        "customers": [],
        "_id": "5dc6af79d6c75309570eaec6",
        "name": "FITNESS",
        "image": "Pack-Fitness.png",
        "price": 10.95,
        "description": "Lorem ipsum Dolor",
        "__v": 0
    }

[Volver a submenu Test _Postman_](#Postman)

## <a id="PUT_Put_pack_por_id"></a>PUT Put pack por `id` ##

>https://thetraktor.herokuapp.com/packs/5dc6af79d6c75309570eaec6

Actualiza los datos del documento referenciado por id

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    {
        "customers": [],
        "_id": "5dc6af79d6c75309570eaec6",
        "name": "FITNESS PLUS",
        "image": "Pack-Fitness.png",
        "price": 10.95,
        "description": "Lorem ipsum Dolor",
        "__v": 0
    }

Example Request Put pack por `id`

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
    'method': 'PUT',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/packs/5dc6af79d6c75309570eaec6',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    var postData =  "{\n    \"customers\": [],\n    \"_id\": \"5dc6af79d6c75309570eaec6\",\n    \"name\": \"FITNESS PLUS\",\n    \"image\": \"Pack-Fitness.png\",\n    \"price\": 10.95,\n    \"description\": \"Lorem ipsum Dolor\",\n    \"__v\": 0\n}";

    req.write(postData);

    req.end();

Example Response    200 OK

    {
        "customers": [],
        "_id": "5dc6af79d6c75309570eaec6",
        "name": "FITNESS PLUS",
        "image": "Pack-Fitness.png",
        "price": 10.95,
        "description": "Lorem ipsum Dolor",
        "__v": 0
    }

[Volver a submenu Test _Postman_](#Postman)

## <a id="DELETE_Delete_pack_por_id"></a>DELETE Delete pack por `id` ##

>https://thetraktor.herokuapp.com/packs/5dc6af79d6c75309570eaec6

Elimina un documento de la coleccion packs referenciado por id

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    { }

Example Request Delete pack por id

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
    'method': 'DELETE',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/packs/5dc6af79d6c75309570eaec6',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    var postData =  "{ }";

    req.write(postData);

    req.end();

Example Response    200 OK

    {
    "customers": [],
    "_id": "5dc6af79d6c75309570eaec6",
    "name": "FITNESS PLUS",
    "image": "Pack-Fitness.png",
    "price": 10.95,
    "description": "Lorem ipsum Dolor",
    "__v": 0
    }

[Volver a submenu Test _Postman_](#Postman)

## <a id="GET_Get_ToDoes"></a>GET Get ToDoes ##

>https://thetraktor.herokuapp.com/todos/

Obtiene el listado de todos los documentos de la coleccion todo

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    { }

Example Request Get ToDoes

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
    'method': 'GET',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/todos/',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    var postData =  "{ }";

    req.write(postData);

    req.end();


Example Response    200 OK

    [
    {
        "_id": "5dc5165e910eb8159cbbe4a4",
        "registerdate": "2019-11-08T07:16:46.100Z",
        "todotask": [
        {
            "registerdate": "2019-11-08T10:47:00.688Z",
            "_id": "5dc5165e910eb8159cbbe4a4",
            "todotaskid": "e0037c63-dfe9-447f-9567-d52011c19a85",
            "task": "añadir contador usuarios",
            "state": "0",
            "disabled": true
        },
        {
            "registerdate": "2019-11-08T07:23:39.217Z",
            "_id": "5dc5165e910eb8159cbbe4a4",
            "todotaskid": "2cbdf809-945d-4634-8e33-07c3d47c504f",
            "task": "jkk55",
            "state": "0",
            "disabled": true
        }
        ],
        "task": "Listar usuarios por plan",
        "type": 0,
        "section": 0,
        "state": "0",
        "description": "",
        "disabled": true,
        "__v": 0
    },
    {
        "_id": "5dc518ba0400176f2aa2254f",
        "registerdate": "2019-11-08T07:26:50.788Z",
    ...

[Volver a submenu Test _Postman_](#Postman)

## <a id="GET_Get_ToDoes_por_id"></a>GET Get ToDoes por `id` ##

>https://thetraktor.herokuapp.com/todos/5dc6136322ad4ef1c370193b

Obtiene un documento de la coleccion todo referenciado por id

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    { }

Example Request Get ToDoes por `id`

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
    'method': 'GET',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/todos/5dc6136322ad4ef1c370193b',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    var postData =  "{ }";

    req.write(postData);

    req.end();

Example Response    200 OK

    {
    "_id": "5dc6136322ad4ef1c370193b",
    "registerdate": "2019-11-09T01:16:19.650Z",
    "todotask": [
        {
        "registerdate": "2019-11-09T01:16:47.840Z",
        "_id": "5dc6137f9c4b3d00048d02a9"
        }
    ],
    "task": "aa",
    "type": 0,
    "section": 0,
    "state": "0",
    "description": "",
    "disabled": false,
    "__v": 0
    }

[Volver a submenu Test _Postman_](#Postman)

## <a id="PUT_Put_ToDo_por_id"></a>PUT Put ToDo por `id` ##

>https://thetraktor.herokuapp.com/todos/5dc6136322ad4ef1c370193b

Actualiza un documento de la coleccion todo referenciado por id

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    {
        "_id": "5dc6136322ad4ef1c370193b",
        "registerdate": "2019-11-09T01:16:19.650Z",
        "todotask": [
            {
                "registerdate": "2019-11-09T01:16:47.840Z",
                "_id": "5dc6137f9c4b3d00048d02a9"
            }
        ],
        "task": "AA-updated",
        "type": 0,
        "section": 0,
        "state": "0",
        "description": "",
        "disabled": false,
        "__v": 0
    }

Example Request Put ToDo por `id`

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
    'method': 'PUT',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/todos/5dc6136322ad4ef1c370193b',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    var postData =  "{\n    \"_id\": \"5dc6136322ad4ef1c370193b\",\n    \"registerdate\": \"2019-11-09T01:16:19.650Z\",\n    \"todotask\": [\n        {\n            \"registerdate\": \"2019-11-09T01:16:47.840Z\",\n            \"_id\": \"5dc6137f9c4b3d00048d02a9\"\n        }\n    ],\n    \"task\": \"AA-updated\",\n    \"type\": 0,\n    \"section\": 0,\n    \"state\": \"0\",\n    \"description\": \"\",\n    \"disabled\": false,\n    \"__v\": 0\n}";

    req.write(postData);

    req.end();

Example Response    200 OK

    {
        "_id": "5dc6136322ad4ef1c370193b",
        "registerdate": "2019-11-09T01:16:19.650Z",
        "todotask": [
            {
                "registerdate": "2019-11-09T01:16:47.840Z",
                "_id": "5dc6137f9c4b3d00048d02a9"
            }
        ],
        "task": "AA-updated",
        "type": 0,
        "section": 0,
        "state": "0",
        "description": "",
        "disabled": false,
        "__v": 0
    }

[Volver a submenu Test _Postman_](#Postman)

## <a id="POST_Post_ToDo"></a>POST Post ToDo ##

>https://thetraktor.herokuapp.com/todos/

Añade documento a la coleccion todo

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    {
        "todotask": [
            {
                "registerdate": "2019-11-09T01:16:47.840Z",
                "_id": "5dc6137f9c4b3d00048d02a9"
            }
        ],
        "task": "NEW",
        "type": 0,
        "section": 0,
        "state": "0",
        "description": "",
        "disabled": false,
        "__v": 0
    }

Example Request Post ToDo

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
    'method': 'POST',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/todos/',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    var postData =  "{\n    \"todotask\": [\n        {\n            \"registerdate\": \"2019-11-09T01:16:47.840Z\",\n            \"_id\": \"5dc6137f9c4b3d00048d02a9\"\n        }\n    ],\n    \"task\": \"NEW\",\n    \"type\": 0,\n    \"section\": 0,\n    \"state\": \"0\",\n    \"description\": \"\",\n    \"disabled\": false,\n    \"__v\": 0\n}";

    req.write(postData);

    req.end();

Example Response    200 OK

    {
        "_id": "5dc6b790d6c75309570eaed2",
        "registerdate": "2019-11-09T12:56:48.650Z",
        "todotask": [
            {
                "_id": "5dc6137f9c4b3d00048d02a9",
                "registerdate": "2019-11-09T01:16:47.840Z"
            }
        ],
        "task": "NEW",
        "type": 0,
        "section": 0,
        "state": "0",
        "description": "",
        "disabled": false,
        "__v": 0
    }

[Volver a submenu Test _Postman_](#Postman)

## <a id="DELETE_Delete_ToDo_por_id"></a>DELETE Delete ToDo por `id` ##

>https://thetraktor.herokuapp.com/todos/5dc6b790d6c75309570eaed2

Elimina documento de la coleccion todo referenciado por id

**Headers**

>Content-Type	application/json

**Body**    raw (application/json)

    {}

Example Request Delete ToDo por id

    var http = require('follow-redirects').http;
    var fs = require('fs');

    var options = {
    'method': 'DELETE',
    'hostname': 'localhost',
    'port': 3000,
    'path': '/todos/5dc6b790d6c75309570eaed2',
    'headers': {
        'Content-Type': 'application/json'
    },
    'maxRedirects': 20
    };

    var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
    });

    var postData =  "{}";

    req.setHeader('Content-Length', postData.length);

    req.write(postData);

    req.end();


Example Response    200 OK

    {
        "_id": "5dc6b790d6c75309570eaed2",
        "registerdate": "2019-11-09T12:56:48.650Z",
        "todotask": [
            {
                "registerdate": "2019-11-09T01:16:47.840Z",
                "_id": "5dc6137f9c4b3d00048d02a9"
            }
        ],
        "task": "NEW",
        "type": 0,
        "section": 0,
        "state": "0",
        "description": "",
        "disabled": false,
        "__v": 0
    }

[Volver a submenu Test _Postman_](#Postman)

[Volver a inicio](#Home)
