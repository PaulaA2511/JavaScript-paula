// alert("Uy hola!!!")

// var nombre = prompt("Ingresa tu nombre")
// var edad = prompt("Ingresa tu edad")
// var lugar_nacimiento = prompt("Ingresa tu lugar de nacimiento")

// alert ("Hola "+ nombre+ ", tienes "+ edad + " y naciste en " + lugar_nacimiento)

// personajes= [1,2,3,4]

// document.write("Hola "+ nombre+ ", tienes "+ edad + " y naciste en " + lugar_nacimiento)

// var a = prompt("Ingrese el primer número")
// var b = prompt("Ingrese el segundo número")

// if (a > b){
//     alert("el número: "+ a+" es mayor que "+ b)
// } else{
//     alert("el número: "+ a+" es menor que "+ b)
// }

var comidas = ["Pastas", "Arroz", "Tamal", "Pan"]

// for(i =0; i< comidas.length; i++){
//     alert(comidas[i])
// }
// i=0
// while(i < comidas.length){
//     alert(comidas[i])
//     i++
// }

opción = prompt("Seleccione su opción 1: perro 2: pizza 3:hamburguesa")

switch(opción){
    case "1":
        alert("Aqui tiene su perro")
        break;

    case "2":
        alert("Aqui tiene su pizza")
        break;

    case "3":
        alert("Aqui tiene su hamburguesa")
        break;

    default:
        alert("Esa opción no existe")
        break
}