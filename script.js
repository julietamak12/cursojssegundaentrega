const user = "julieta";
const pass_comprador = "hola123";
let personas = null;
let todasLasPersonas = [];

function solicitarDatos(){
    let usuario = prompt("Ingrese su usuario");
    let pass = prompt ("Ingrese su contraseña");

    if (validarDatos(usuario,pass))
    {
        iniciarCarrito();
        pasoFinal();
    }
    else 
       alert("Usuario incorrecto, recargue la pagina para ingresar sus datos nuevamente");
}

function validarDatos(usuario,pass){
    if (usuario ===  user && pass === pass_comprador )
        return true ;
    else 
        return false ;
}

function iniciarCarrito(){
    let actividad = null;
    let finalizar_carrito = false;
    let vianda = null;
    let temporada = null;

    while (!finalizar_carrito){

        actividad = confirm("¿Quiere comprar la actividad Chalten Full Day?");

        if (actividad){
            personas = prompt("¿Cuantas personas son?");
            vianda = confirm("¿Queres incluir viadas?");
            temporada = prompt("¿Viajas en temporada alta o baja?");
        }
        else 
        {
            alert ("Regresa en otro momento por otra actividad");
        }

        finalizar_carrito = confirm("¿Confirma la compra de la actividad?");
    }
    
    if (vianda == true)
        vianda = "con viandas"
    else 
        vianda = "sin viandas"

    console.log ("Estas comprando Chalten Full Day para "+personas + " personas "+ vianda + " en temporada "+temporada )
}

/*despues de preguntar si confirma la actividad, quiero preguntar si quiere agregar, 
translado desde el aeropuerto, si la respuesta es sí, quiero que enumere los nombres
de los pasajes, cada uno en un prompt, asi los puedo separar en un array, y despues para aplicar el pop, 
que le pregunte si quiere eliminar alguna persona de la lista. 
Y quiero poder agregar una operación y que multriplique el precio del traslado 
por la cantidad de personas*/

function pasoFinal (){
    let personaTraslado = confirm("Quiere agregar traslado desde el aeropuerto por $500 por persona?");

    if (personaTraslado)
    {
        for (let i=0; i < personas; i++){
           let NombrePersonas = prompt("Nombre de la persona " + (i+1));
            todasLasPersonas.push(NombrePersonas);
        }
    }
    else
        alert ("No agregó traslado desde el aeropuerto");

    
}

// Comienzo de programa
solicitarDatos();
console.log(todasLasPersonas); // muestro array por consola con los nombres de las personas
// que viajan