const inquirer = require("inquirer");

require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: "1",
        name: `${"1.".cyan} Crear tarea.`,
      },
      {
        value: "2",
        name: `${"2.".cyan} Listar tarea.`,
      },
      {
        value: "3",
        name: `${"3.".cyan} Listar tareas completadas.`,
      },
      {
        value: "4",
        name: `${"4.".cyan} Listar tareas pendientes.`,
      },
      {
        value: "5",
        name: `${"5.".cyan} Completar tareas.`,
      },
      {
        value: "6",
        name: `${"6.".cyan} Borrar tarea.`,
      },
      {
        value: "0",
        name: `${"0.".cyan} Salir.`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("+++++++++++++++++++++++++".blue);
  console.log("  Seleccione una opción  ".white);
  console.log("+++++++++++++++++++++++++".blue);
  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pausa = async () => {
  const continuar = [
    {
      type: "input",
      name: "opcion",
      message: "¿Desea continuar? " + `Precione ${"enter.".blue}`,
    },
  ];
  await inquirer.prompt(continuar);
};

const leerInput = async (mensaje) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message: mensaje,
      validate(value) {
        if (value.length === 0) {
          return "Favor ingresar un valor!!";
        } else {
          return true;
        }
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
};

const listadoTareaBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.des}`,
    };
  });
  choices.unshift({
    value:'0',
    name: '0. '.green+ 'Cancelar'
  })
  const preguntas = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];
  opcion = await inquirer.prompt(preguntas);
  return opcion;
};

const mostrarListadoChecklist = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.des}`,
      checked: (tarea.completadoEn) ? true : false
    };
  });

  const pregunta = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione",
      choices,
    },
  ];
  const {ids} = await inquirer.prompt(pregunta);
  return ids;
};

const confirmar = async(mensaje) => {
    const pregunta = [
      {
        type:'confirm',
        name:'ok',
        mensaje 
      }

    ]
    ok = await inquirer.prompt(pregunta);
    return ok;
};

module.exports = { inquirerMenu, pausa, leerInput, listadoTareaBorrar,confirmar,mostrarListadoChecklist};
