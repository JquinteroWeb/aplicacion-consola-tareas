/**
 *
 * _lsitado
 */
const Tarea = require("./tarea");
class Tareas {
  _listado = {};

  get _listadoArr() {
    const _listado = [];
    Object.keys(this._listado).forEach((key) => {
      _listado.push(this._listado[key]);
    });
    return _listado;
  }
  constructor() {
    this._listado = {};
  }

  crearTarea(des = "") {
    const tarea = new Tarea(des);
    this._listado[tarea.id] = tarea;
  }
  cargarTareasFromArray(data) {
    Object.keys(data).forEach((key) => {
      this._listado[key] = data[key];
    });
  }

  listadoCompleto() {
    
    this._listadoArr.forEach((tarea, i) => {

       const idx = `${i+1}.`.green;
       const {des,completadoEn} = tarea;
       const estado = (completadoEn) ? 'Completa'.green : 'incompleta'.red;
        console.log(`${idx} ${des} ${estado}`);
    });   
  }
}

module.exports = Tareas;
