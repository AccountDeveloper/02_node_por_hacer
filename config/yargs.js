const { help } = require('yargs');
const desc = {
    demand: true,
    alias: 'd',
    desc: 'Describe la tarea'
};

const argv = require('yargs')
    .command('crear', 'crea un item de cosas por hacer', { desc })
    .command('actualizar', 'Actualiza un item de la lista', {
        desc,
        //generalOptionss: generalOptions,
        complet: {
            demand: true,
            alias: 'c',
            default: true,
            desc: 'Indica si la tarea se realizó',
            type: 'boolean'
        }
    })
    .command('borrar', 'Borra un item de la lista', {
        desc
    })
    .help()
    .argv;

module.exports = {
    argv
};