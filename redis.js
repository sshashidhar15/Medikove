const redis = require("redis")
const config = require('./medikove-backend/config')
const default_error = 'Can not connect to ' + config.redis_host + ':' + config.redis_port
var   client

