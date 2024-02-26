

const body = document.querySelector("body")

const arregloColores = ['maroon', 'olive', 'navy', 'orange', 'blueviolet', 'coral', 'cornflowerblue', 'darkolivegreen', 
'darkred', 'darksalmon', 'darkslateblue', 'goldenrod', 'mediumslateblue', 'orangered','	darkmagenta',
 '	seagreen', 'yellowgreen']

for (let i=0; i < 10; i++){
    const div = document.createElement('div')
    div.style.height = '100px'
    div.style.backgroundColor = arregloColores[Math.floor(Math.random() * arregloColores.length)]
    body.appendChild(div)
}