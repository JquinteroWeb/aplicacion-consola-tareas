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
        name: `${'1.'.cyan} Crear tarea.`,
      },
      {
        value: "2",
        name: `${'2.'.cyan} Listar tarea.`,
      },
      {
        value: "3",
        name: `${'3.'.cyan} Listar tareas completadas.`,
      },
      {
        value: "4",
        name: `${'4.'.cyan} Listar tareas pendientes.`,
      },
      {
        value: "5",
        name: `${'5.'.cyan} Completar tareas.`,
      },
      {
        value: "6",
        name: `${'6.'.cyan} Borrar tarea.`,
      },
      {
        value: "0",
        name: `${'0.'.cyan} Salir.`,
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
module.exports = { inquirerMenu, pausa, leerInput };
