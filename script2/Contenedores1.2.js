// Agregar la funcionalidad de que los colores no se repitan

const body = document.querySelector("body")
const indiceNumeros= []


const arregloColores = ['maroon', 'olive', 'navy', 'orange', 'blueviolet', 'coral', 'cornflowerblue', 'darkolivegreen', 
'darkred', 'darksalmon', 'darkslateblue', 'goldenrod', 'mediumslateblue', 'orangered','	darkmagenta',
 '	seagreen', 'yellowgreen', 'bisque', 'firebrick', 'gold']


while(indiceNumeros.length < 10){
    const numeroAleatorio = Math.floor(Math.random() * arregloColores.length)

    if (!indiceNumeros.includes(numeroAleatorio)) {
        indiceNumeros.push(numeroAleatorio)
    }
}

for (let i=0; i < 10; i++){
    const div = document.createElement('div')
    div.style.height = '100px'
    div.style.backgroundColor = arregloColores[indiceNumeros[i]]
    body.appendChild(div)
}
