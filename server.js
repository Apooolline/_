const express = require('express')

let server = express()

server.use('/assets', express.static('assets'))
server.use('/', express.static('public'))
server.listen(8080)

// <(è_é)_/ - serveur qui se démène !!!!
// (0-0) - client à lunettes
// (O~O) - client allergique
// (-_-) - client faché
// (^-^) - client content
// (0-0) - client à lunettes
// (O~O) - client allergique
// (-O-) - client affamé
// (╯°□°）╯︵ ┻━┻ - client énervé qui BALANCE DES TABLES
// ┬─┬ ノ( ゜-゜ノ) - client trop gentil qui ramasse les bêtises des autres
// \["-"]/ - monsieur différent (= Axolan)
// (-w-) - client chat suffisant (= Kitsu)