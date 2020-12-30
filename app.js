const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        let lista = porHacer.getLista();
        for (let tarea of lista) {
            console.log('======='.green);
            console.log(tarea.descripcion);
            console.log(tarea.complet);
            console.log('====='.green);
        }
        break;
    case 'crear':
        let agregarTarea = porHacer.crearTarea(argv.desc);
        console.log(agregarTarea);
        break;
    case 'actualizar':
        let actualizarTarea = porHacer.updateLista(argv.desc, argv.complet)
        console.log(actualizarTarea);
        break;
    case 'borrar':
        let borrarTarea = porHacer.deleteLista(argv.desc)
        console.log(borrarTarea);
        break;

    default:
        console.log('comando no reconocido');
        break;
}