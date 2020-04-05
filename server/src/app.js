const express = require('express')
const path = require('path')
const apiRouter = require('./api');
const env = process.env.NODE_ENV

const app = express()

//debug
app.use((req, res,next) => {
    console.log(` L'appel recu : ${req.method} : ${req.url}`)
    next()
})

// Api
app.use('/api', apiRouter)

// ne renvoie pas le front lors de l'appel de l'api
app.use('/api/*', (req, res) => res.sendStatus(404))

// routes Statiques

if(env === 'dev') {
    app.use('/', require('./routes/static'))
} else {
    // sert le build en production
    app.use(express.static(path.join(__dirname, '../public')))
 // pour que les autres routes du front sont gérées par le react router du front
 app.use('/*', (req, res) => res.sendFile(path.join(_dirname, '../public/index.html')))
}

module.exports = app