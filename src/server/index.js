require('dotenv').config() // Do this first.

const server = require('./server')

const port = process.env.port || 8080

server.listen(port, () => console.log('http://localhost:' + port))

// TODO Remove this
// require('./externals/iframely').getArticleDetails({
//   url: 'https://www.theguardian.com/tv-and-radio/2017/jan/25/mary-tyler-moore-dies-aged-80'
// })
//   .then(response => {
//     console.log('getArticleDetails:', response)
//   })
//   .catch(error => console.log(error.message))
