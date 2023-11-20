**npm init** - automatically generates package.json file at the root of the
project. 
**"scripts": {"start": "node index.js", "test": "echo \"Error: no test specified\" && exit 1"}** - define a dedicated npm script for start the app

**npm start** - run the program

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const http = require('http')

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**npm install express** - defines it as a project dependency

**npm update** - update the dependencies of the project

**npm install** - on the project on another computer, installs all up-to-date dependencies of the project

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const express = require('express')
const app = express()

let notes = [
  ...
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/*?api?*/*name*', (request, response) => {
  response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**npm install --save-dev nodemon** - installs nodemon by defining it as a development dependency. nodemon automatically restarts application when code is changed. the browser still has to be manually refreshed. 

**node_modules/.bin/nodemon index.js** - starts the application with nodemon.  

**"scripts": {"start": "node index.js","dev": "nodemon index.js", "test": "echo \"Error: no test specified\" && exit 1"}** - define a dedicated npm script for start the app with nodemon

**npm run dev** - replaces the command "**node_modules/.bin/nodemon index.js**" for start the application with nodemon

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

URL	        verb	      functionality

----------------------------------------------------------------------------
notes/10	  GET	        fetches a single resource
----------------------------------------------------------------------------
notes	      GET	        fetches all resources in the collection
----------------------------------------------------------------------------
notes	      POST	      creates a new resource
----------------------------------------------------------------------------
notes/10	  DELETE	    removes the identified resource
----------------------------------------------------------------------------
notes/10	  PUT         replaces the entire identified resource 
----------------------------------------------------------------------------
notes/10	  PATCH	      replaces a part of the identified resource 
----------------------------------------------------------------------------