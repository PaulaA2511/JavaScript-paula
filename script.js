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

body {
  font-family: 'Press Start 2P', cursive;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #a17ddc, #a7173e);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin: 20px 0;
  color: #facc15;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
}

.slider{
    position: relative;
    width: 80%;
    max-width: 800px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slides img {
  flex: 0 0 100%;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
}

button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: #facc15;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s, background 0.3s;
    z-index: 1000;
}

button:hover {
  background: #facc15;
  color: black;
  transform: scale(1.2);
}

.prev {
    left: 15px;
}

.next {
    right: 15px;
}

.indicators{
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 15px;
}

.indicator {
    width: 12px;
     height: 12px;
     background: white;
     border-radius: 50%;
     opacity: 0.5;
     transition: transform 0.3s ease-in-out;
}

.indicator-active {
     background: #facc15;
    transform: scale(1.3);
     opacity: 1;
}
