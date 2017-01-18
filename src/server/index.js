const dotenv = require('dotenv')

const server = require('./server')

dotenv.config()

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log('Listening on port', PORT))
