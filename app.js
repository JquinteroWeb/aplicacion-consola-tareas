require("colors");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { pausa, inquirerMenu, leerInput } = require("./helpers/inquirer");

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
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        break;
      case "7":
        break;
    }
    await pausa();
  } while (opt !== "0");
  //guardarDB(tareas._listadoArr);
  console.log("salio");
};

main();
