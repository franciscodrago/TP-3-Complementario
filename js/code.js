//Simulador de  negocio de indumentaria

const sumarIva = (precio) => {return+ precio + (precio * 0.35)}
const mostrarMensaje = (mensaje) => {alert(mensaje)}


let plataforma = parseInt(prompt("Ingrese el numero correspondiente para ver el catalogo del genero deseado \n 1)Hombre \n 2)Mujer"))

 main();
 function main (){
     if (plataforma == 1){
        ropaHombre ();
        valorRopaHombre ();

     }
     else if  (plataforma == 2){
        ropaMujer ();
        valorRopaMujer ();
     }

     else
     console.log("Ingrese un valor valido")

 }

 function ropaHombre () {
    console.log ("1)Remera\n2)Buzo\n3)Campera\n4)Pantalon\n5)Jogger")
 }

 function ropaMujer () {
    console.log ("1)Remera\n2)Vestido\n3)Zapatos\n4)Campera\nPollera")
 }

 //Precio de ropa de hombre

 precioRopa = 0;

 function valorRopaHombre () {
    let precioHombre = prompt("Elija el número de la prenda que desea saber su precio \n 1)Remera\n2)Buzo\n3)Campera\n4)Pantalon \n5)Jogger\nPresione ESC para salir.")
    
    if (precioHombre == 1) {
       
       precioRopaHombre = sumarIva (4000)
       
       mostrarMensaje("La remera tiene un valor de $"+precioRopaHombre);
       cantidadUnidad();
       
      }

      else if (precioHombre == 2) {
         precioRopaHombre = sumarIva (6000)

         mostrarMensaje("El buzo tiene el valor de $"+precioRopaHombre)
         cantidadUnidad()
      }

      else if (precioHombre == 3) {
         precioRopaHombre = sumarIva (8000)

         mostrarMensaje("La campera tiene el valor de $"+precioRopaHombre)
         cantidadUnidad()
      }
     
      else if (precioHombre == 4) {
         precioRopaHombre = sumarIva (7000)

         mostrarMensaje("El pantalon tiene el valor de $"+precioRopaHombre)
         cantidadUnidad()
      }


 else if (precioHombre == 5) {
         precioRopaHombre = sumarIva (6500)

         mostrarMensaje("El jogger tiene el valor de $"+precioRopaHombre)
         cantidadUnidad()
      }

      else if (precioHombre == EXIT || precioHombre == "exit") { 
         return false;
      }

      else {
         mostrarMensaje ("No tenemos esa prenda")
      }

      valorRopaHombre ();

   }

   //Precio ropa de mujer
   function valorRopaMujer () {
      let precioMujer = prompt("Elija el número de la prenda que desea saber su precio \n 1)Remera\n2)Vestido\n3)Zapatos\n4)Campera\n5)Pollera\nPresione ESC para salir.")
      
      if (precioMujer == 1) {
         
         precioRopaMujer = sumarIva (4000)
         
         mostrarMensaje("La remera tiene un valor de $"+precioRopaMujer);
         cantidadUnidad();
         
        }
  
        else if (precioMujer == 2){
  
           precioRopaMujer = SumarIva (10000)
           
           mostrarMensaje("El buzo tiene el valor de $"+precioRopaMujer);
           cantidadUnidad();
  
        }
  
        else if (precioMujer == 3) {
           precioRopaMujer = sumarIva (15000)
  
           mostrarMensaje("Los zapatos tiene el valor de $"+precioRopaMujer)
           cantidadUnidad();
        }
       
        else if (precioMujer == 4) {
           precioRopaMujer = sumarIva (8000)
  
           mostrarMensaje("la campera tiene el valor de $"+precioRopaMujer)
           cantidadUnidad();
        }
  
  
   else if (precioMujer == 5) {
           precioRopaMujer = sumarIva (7500)
  
           mostrarMensaje("la pollera tiene el valor de $"+precioRopaMujer)
           cantidadUnidad()
        }
  
        else if (precioMujer == EXIT || precioMujer == "exit") { 
           return false;
        }
  
        else {
           mostrarMensaje ("No tenemos esa prenda")
        }
  
        valorRopaMujer ();
        
     }


     //Calcular por cantidad 

     function cantidadUnidad() {
      
      let cantidad = parseInt(prompt("Ingrese la cantidad de prendas que desea comprar"));

      for (i = 1; i <= cantidad; i++) {
         let resultado = precioRopa * i ;

      console.log(precioRopa, " X "+ i + resultado);
      }
     }
//Arrays

const listaReponer=["zapatos","medias","gorro","buzo","guantes","bufandas","shorts"];
console.log(listaReponer);

console.log("No queda ninguna par de "+listaReponer[1]);


     const Prendas=[
    {
        Nombre:"Remera",
        genero:"Algodon",
        precio:4000
    },
    {
        Nombre:"Campera",
        genero:"Cuero",
        precio:15000
    },
    {

        Nombre:"Buzo",
        genero:"Algodon",
        precio:2900
    },
    {
        Nombre:"Pantalon",
        genero:"Coroderoi",
        precio:8000
    }
];


for(const prenda of Prendas){
   console.log(prenda.Nombre);
   console.log(prenda.precio);
}
