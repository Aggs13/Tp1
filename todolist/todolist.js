// ========================
// Menú Principal en Node.js
// ========================

const { input, close } = require("../lib/nodeImperativo");

// Lista de tareas en memoria
let tareas = [
{id:0,titulo:"Tarea 1", descripcion:"Tarea 1 de prueba", estado:"Pendiente"},
{id:1,titulo:"Tarea 2", descripcion:"Tarea 2 de prueba", estado:"En Proceso"},
{id:2,titulo:"Tarea 3", descripcion:"Tarea 3 de prueba", estado:"Terminada"},
{id:3,titulo:"Tarea 4", descripcion:"Tarea 4 de prueba", estado:"Cancelada"},
];
let newTarea;

function verTareas(tareas) {
  tareas.forEach(function(tarea) {
    console.log(tarea);
  });
}
// Función para mostrar el menú
function mostrarMenu() {
  console.log("\n¡Hola!");
  console.log("¿Qué deseas hacer?");
  console.log("[1] Ver Mis Tareas.");
  console.log("[2] Buscar una Tarea.");
  console.log("[3] Agregar una Tarea.");
  console.log("[0] Salir.");
}

// Función principal (main)
async function main() {
  let opcion;

  do {
    mostrarMenu();
    opcion = await input("> ");

    switch (opcion) {
      case "1":
          console.log("👀 Ver mis tareas");
          verTareas(tareas)
        break;

      case "2":
        console.log("🔍 Buscar una Tarea");
          await buscarTarea()
        break;

      case "3":
        console.log("➕ Agregar una Tarea");
          await agregarTarea();
        break;

      case "0":
        console.log("👋 Saliendo del sistema...");
        break;

      default:
        console.log("Opción inválida. Por favor, ingrese una opción del menú.");
    }

  } while (opcion !== "0");



  async function agregarTarea(){
    const id = tareas.length
    const newTitulo = await input("Ingrese el Titulo: ")
    const newDescripcion = await input("Ingrese la descripcion: ")
    console.log("1-[Pendiente]")
    console.log("2-[En proceso]")
    console.log("3-[Terminada]")
    console.log("4-[Cancelada]")

    const numEstado = await input("Ingrese el Nº de estado: ")
    let newEstado;
    if(numEstado == "1") newEstado = "Pendiente"
    if(numEstado == "2") newEstado = "En Proceso"
    if(numEstado == "3") newEstado = "Terminada"
    if(numEstado == "4") newEstado = "Cancelada"
     newTarea = {
      id:id,
      titulo : newTitulo,
      descripcion : newDescripcion,
      estado : newEstado,

    }
    tareas.push(newTarea)
    mostrarMenu()
  }


  async function buscarTarea() {
    console.log("Como desea buscar la tarea?")

    console.log("1-ID")
    console.log("2-Estado de la tarea")
    let num = await input("Ingrese como buscar: ")
    if(num == "1") await buscTareaId()
    if(num == "2") await buscTareaEstado()
    
    
}

// buscar tarea por ID
async function buscTareaId(){
  numId = parseInt(await input("ingrese el ID que busca: "))
  tareas.forEach(function(tarea){
    if(tarea.id == numId){
      console.log(tarea)
    }
  })

}


// buscar tarea por estado 
async function buscTareaEstado() {

    console.log("1-[Pendiente]")
    console.log("2-[En proceso]")
    console.log("3-[Terminada]")
    console.log("4-[Cancelada]")

    let numEstado = await input("Ingrese el estado: ")

    if(numEstado == "1"){
      tareas.forEach(function(tarea){
        if(tarea.estado == "Pendiente"){
          console.log(tarea)
        }
      })
    }

    if(numEstado == "2"){
      tareas.forEach(function(tarea){
          if(tarea.estado == "En Proceso"){
            console.log(tarea)
          }
        })
    }

    if(numEstado == "3"){
      tareas.forEach(function(tarea){
        if(tarea.estado == "Terminada"){
          console.log(tarea)
        }
      })
    }

    if(numEstado == "4"){
      tareas.forEach(function(tarea){
        if(tarea.estado == "Cancelada"){
          console.log(tarea)
        }
      })
    }
}


  close();
}

// Ejecutar el programa
main();
