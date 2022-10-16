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
  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
      return "Se borro Correctamente";
    }
    return "Error al borrar";
  }

  crearTarea(des = "") {
    const tarea = new Tarea(des);
    this._listado[tarea.id] = tarea;
  }
  cargarTareasFromArray(data = []) {
    data.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  listadoCompleto() {
    this._listadoArr.forEach((tarea, i) => {
      const idx = `${i + 1}.`.green;
      const { des, completadoEn } = tarea;
      const estado = completadoEn ? "Completa".green : "incompleta".red;
      console.log(`${idx} ${des} ${estado}`);
    });
  }

  //Listar tareas pendientes
  listarTareasCompletadas(com = true) {
    let count = 1;
    this._listadoArr.forEach((tarea) => {
      const idx = `${count}.`.green;
      const { des, completadoEn } = tarea;
      const estado = completadoEn
        ? completadoEn.toString().green
        : "incompleta".red;
      if (com) {
        if (completadoEn) {
          console.log(`${idx}. ${des} :: ${estado.green}`);
          count++;
        }
      } else {
        if (!completadoEn) {
          console.log(`${idx}. ${des} :: ${estado}`);
          count++;
        }
      }
    });
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if(!tarea.completadoEn){
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this._listadoArr.forEach((tarea)=>{

      if(!ids.includes(tarea.id)){
        this._listado[tarea.id].completadoEn = null;
      }
    })
  }
}

module.exports = Tareas;
