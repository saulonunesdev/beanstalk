require('dotenv').config()

const port = process.env.SERVER_PORT || 3000
const serverHost = process.env.SERVER_HOST || '0.0.0.0'

const messageHi = process.env.MESSAGE || 'saulo'

const fastify = require('fastify')({
  logger: true
})

fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.get('/health', function (request, reply) {
  reply.send({ status: messageHi })
})

fastify.listen({ port, host: serverHost }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
