const fs = require('fs');

let listaPorHacer = [];

const saveDB = () => {
    let data = JSON.stringify(listaPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) {
            throw (err);
        }
    });
};

const ReadDB = () => {
    try {
        listaPorHacer = require('../db/data.json');
    } catch (error) {
        listaPorHacer = [];
    }
};

const crearTarea = (descripcion) => {
    ReadDB();
    let porHacer = {
        descripcion,
        complet: false
    };
    listaPorHacer.push(porHacer);
    saveDB();
    return porHacer;
};

const getLista = () => {
    ReadDB();
    return listaPorHacer;
};

const updateLista = (descripcion, complet = true) => {
    ReadDB();
    let index = listaPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listaPorHacer[index].complet = complet;
        saveDB();
        return true;
    } else {
        return false;
    }
};

const deleteLista = (descripcion) => {
    ReadDB();
    let entra = listaPorHacer.length;
    let filtrado = listaPorHacer.filter(tarea => tarea.descripcion !== descripcion)
    let sale = filtrado.length;
    if (entra > sale) {
        listaPorHacer = filtrado;
        saveDB();
        return true;
    } else {
        return false;
    }
};

module.exports = {
    crearTarea,
    getLista,
    updateLista,
    deleteLista
}