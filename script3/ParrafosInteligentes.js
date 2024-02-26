// Generar 5 parrafos con texto aleatorio dado por una función 
// Tamaño del texto entre 50 y 100, además de mostrar los caracteres contenidos en cada parrafo

const body = document.querySelector("body")

const palabras = ["piano ", "guitarra ", "violin ", "bateria ", "saxofon ", "trompeta ", "flauta ", "violonchelo ", 
"arpa ", "ukelele ", "acordeon ", "hamburguesa ", "pizza ", "taco ", "sushi ", "quesadilla ", "paella ", 
"spaghetti ", "lasagna ", "ramen ", "burrito ", "tostada ", "croissant ", "bagel ", "donut ", "cereal ", 
"sandwich ", "tarta ", "cazuela ", "enchilada ", "gyro ", "kebab ", "tikka ", "tempura ", "sashimi ", "tiramisu ", 
"macaroon ", "pancake ", "waffle ", "tartaleta ", "crepe ", "muffin ", "cupcake ", "flan ", "sorbete ", "fondue ", 
"pastelito ", "budin ", "batido ", "smoothie ", "jugo ", "limonada ", "mocha ", "latte ", "cappuccino ", "americano ", 
"espresso ", "macchiato ", "chai ", "chocolate ", "vainilla ", "fresa ", "frambuesa ", "manzana ", "naranja ", "uva ", 
"banana ", "sandia ", "melon ", "pinia ", "kiwi ", "pera ", "coco ", "ciruela ", "albaricoque ", "cereza ", "granada ", 
"higo ", "mango ", "guayaba ", "tamarindo ", "pomelo ", "lima ", "papaya ", "nispero ", "caqui ", "nectarina ", "mora ", 
"arandano ", "morera ", "carambola ", "aguacate ", "mandarina ", "maracuya ", "guanabana ", "zapote ", "pitahaya ", 
"mangostan ", "salak ", "lichi ", "rambutan ", "kiwano ", "durian ", "perro ", "gato ", "mesa ", "silla ", "taza ", 
"libro ", "computadora ", "telefono ", "jardin ", "ciudad ", "rio ", "montana ", "nube ", "sol ", "luna ", "estrella ", 
"ocean ", "playa ", "bosque ", "parque ", "futbol ", "baloncesto ", "natacion ", "correr ", "bicicleta ", "cine ", 
"musica ", "comida ", "bebida ", "fruta ", "verdura ", "pan ", "queso ", "carne ", "pescado ", "pollo ", "arroz ", 
"ensalada ", "sopa ", "helado ", "chocolate ", "cafe ", "agua ", "cerveza ", "vino ", "gimnasio ", "yoga ", "senderismo ",
 "acampada ", "surf ", "esqui ", "tenis ", "golf ", "voleibol ", "beisbol ", "boxeo ", "atletismo ", "ciclismo ", 
 "escalada ", "patinaje ", "buceo ", "motociclismo ", "camping ", "alpinismo ", "paracaidismo ", "parapente ", "padel ", 
 "ajedrez ", "rompecabezas ", "crucigramas ", "laberinto ", "dardos ", "mahjong ", "go ", "sudoku ", "backgammon ", 
 "bridge ", "poker ", "billar ", "tiro ", "bolos "]

function generarTextoAleatorio(){
    let indice= Math.floor(Math.random() * 50+50)
    textoRandom=" "
    for (let i=0; i<indice; i++){
        textoRandom += palabras[Math.floor(Math.random()* 200)]
    }
    return textoRandom
}

for (let i=0; i < 5; i++){
    const parrafo= document.createElement('p')
    const tituloParrafo= document.createElement('p')
    tituloParrafo.textContent = `Parrafo ${i+1}`
    parrafo.textContent = generarTextoAleatorio()
    body.appendChild(tituloParrafo)
    body.appendChild(parrafo)

}