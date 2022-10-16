require("colors");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { pausa, inquirerMenu, leerInput,listadoTareaBorrar, confirmar, mostrarListadoChecklist } = require("./helpers/inquirer");

const Tareas = require("./models/tareas");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        //crear opcion para crear las tareas
        const desc = await leerInput("Descipcion de la tarea: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3"://Listar completadas
        tareas.listarTareasCompletadas();
        break;
      case "4"://listar Pendientes
        tareas.listarTareasCompletadas(false);
        break;
      case "5"://Listado pendiente
        const ids = await mostrarListadoChecklist(tareas._listadoArr);
        tareas.toggleCompletadas(ids);        
        break;
      case "6"://Borrar tareas
       const {id} = await listadoTareaBorrar(tareas._listadoArr); 
       if(id != '0'){

         const {ok} = await confirmar('¿Estas seguro?');        
         if(ok){
            msg = tareas.borrarTarea(id);       
         }
         
        }     
        break;
      case "7":
        break;
    }
    await pausa();
    guardarDB(tareas._listadoArr);
  } while (opt !== "0");
  
};

main();
