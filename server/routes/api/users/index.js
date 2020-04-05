const express = require('express');
const controllers = require('./controllers')
const {USERS} = require('../../../constants')

const router = express.Router()

router.get('/', controllers.list);