// importando comandos
const git = require('./git');
const ola = require('./ola')
const dado = require('./dado');
const social = require('./social');
const comando = require('./comandos');
const usuario = require('./user');
module.exports = [
    {
        cmd: 'ola',
        description: 'Dizer ola!',
        func: (client, channel, user) => ola(
          client,
          channel,
          user
        )
    },

    {
        cmd: 'git',
        description: 'Mosta o github',
        func: (client, channel) => git(client, channel)
    },

    {
        cmd: 'roll',
        description: 'Rola 1 D 6',
        func: (client, channel, user, message) => dado(
            client,
            channel,
            user,
            message
          )
    },
    {
        cmd: 'social',
        description: 'mostras redes sociais',
        func: (client, channel) => social(client, channel) 
    },
    {
        cmd:'comando',
        description: 'mostra os comandos disponiveis',
        func: (client, channel) => comando(client, channel)
    },
    {
        cmd: 'usuario',
        description: 'teste para pegar dados',
        func: (client, channel, user) => usuario(client, channel, user)
    }
]