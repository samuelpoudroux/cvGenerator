const express = require('express')
const httpProxy = require('http-proxy')
const router = express.Router()
const proxy = httpProxy.createProxyServer();

const port = process.env.FRONT_PORT || '8080'


router.get('/*', (req, res, next) => {
    proxy.web(req, res, {target:`http://localhost:${port}`}, () => {
        next( new Error('erreur lors de la connection au serveur static'))
    })
})

module.exports = router;