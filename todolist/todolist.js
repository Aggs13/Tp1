// ========================
// Menú Principal en Node.js
// ========================

const { input, close } = require("./lib/nodeImperativo");

// Lista de tareas en memoria
let tareas = [];
let newTarea;
function verTareas(tareas) {
  tareas.forEach(function(tarea) {
    console.log(tarea);
  });
}
// Función para mostrar el menú
function mostrarMenu() {
  console.log("\n¡Hola Olivia!");
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
    console.log("2-Palabras clave")
    
    const num = await input("Ingrese como buscar: ")
    if(num == "1"){
      let numId = await input("ingrese el id: ")
      numId = parseInt(numId)
      tareas.forEach(function(tareas){
        if(tareas.tarea.id == numId){
          console.log(tareas)
        }
      })
    }

    if(num == "2"){
      let palabra = await input("Ingrese la palabra: ")
      tareas.forEach(function(tareas){
          let titulo = tareas.tarea.titulo
          if(titulo.includes(palabra)){
            console.log(tareas)
          }
      })
    } 

  }


  close();
}

// Ejecutar el programa
main();
