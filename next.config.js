const env = require('dotenv')

console.log(env)

if (process.env.NODE_ENV === 'production') {
  env.config({path:__dirname+'/config/.env.production'})
}

if (process.env.NODE_ENV === 'development') {
  env.config({path:__dirname+'/config/.env.development'})
}

module.exports = {
  reactStrictMode: true,
}