# LAB 01 Topicos
---

## Script1-Contenedores

#### Este programa crea 10 contenedores de tamaño 100px, con colores aleatorios

Creacion del elemento body dentro del codigo para conectarlo con el html

Se crea el arreglo de colores
```js
const arregloColores = ['maroon', 'olive', 'navy', 'orange', 'blueviolet', 'coral', 'cornflowerblue', 'darkolivegreen', 
'darkred', 'darksalmon', 'darkslateblue', 'goldenrod', 'mediumslateblue', 'orangered','	darkmagenta',
 '	seagreen', 'yellowgreen']
```

Se genera un ciclo "for" que en que cada iteración cree un elemento "div", para despues añadirle la propiedad de altura en 100px, mientras que el color de fondo lo toma del arreglo con la método math.random. Para por último vincularlo con el "body" por medio del metodo appendChild
```js
for (let i=0; i < 10; i++){
    const div = document.createElement('div')
    div.style.height = '100px'
    div.style.backgroundColor = arregloColores[Math.floor(Math.random() * arregloColores.length)]
    body.appendChild(div)
}
```
---
---

## Scritp2- Conetendores 1.2

#### Genera 10 contenedores con colores aleatorios y estos no se repiten

Creacion del elemento body dentro del codigo para conectarlo con el html

Se crea un arreglo indiceNumeros vacío
Se crea el arreglo de colores
```js
const arregloColores = ['maroon', 'olive', 'navy', 'orange', 'blueviolet', 'coral', 'cornflowerblue', 'darkolivegreen', 
'darkred', 'darksalmon', 'darkslateblue', 'goldenrod', 'mediumslateblue', 'orangered','	darkmagenta',
 '	seagreen', 'yellowgreen', 'bisque', 'firebrick', 'gold']
```
Se crea un ciclo While, que se ejecuta mientras que la longitud del arreglo indice numeros sea menor a 10, lo que hace es generar una variable numeroAleatorio donde se usa la método math.random para sacar un numero aleatorio de un rango de 50 a 100 (Este será el numero de palabras del parrafo), siguiendo con el while entra a un if si al usar el método .includes aplicado en el arreglo indiceNúmeros es verdadero el valor de retorno y este es negado, dandonos a entender que no se encuentra en el arreglo. Para posteriormente agregarlo al arreglo con un método .push

```js
while(indiceNumeros.length < 10){
    const numeroAleatorio = Math.floor(Math.random() * arregloColores.length)

    if (!indiceNumeros.includes(numeroAleatorio)) {
        indiceNumeros.push(numeroAleatorio)
    }
}
```
Se genera un ciclo "for" que en que cada iteración cree un elemento "div", para despues añadirle la propiedad de altura en 100px, mientras que el color de fondo lo toma del arreglo arregloColores con indiceNumero en posición de i. Para por último vincularlo con el "body" por medio del metodo appendChild

```js
for (let i=0; i < 10; i++){
    const div = document.createElement('div')
    div.style.height = '100px'
    div.style.backgroundColor = arregloColores[indiceNumeros[i]]
    body.appendChild(div)
}

```

---
---
## script3- Parrafos Inteligentes

#### programa que genera 5 parrafos entre 50 y 100 palabras con texto aleatorio

Creacion del elemento body dentro del codigo para conectarlo con el html
Creación del arreglo con 200 palabras

Creación de la función generarTextoAleatorio. Se crea una variable indice para para sacar un numero en el rango de 50 a 100 (será el numero de palabras que tenga) con con el método .random
Se crea otra variable textoRandom vacío. Entra a un ciclo for desde 0 hasta el indice, donde a la variable textoRandom se le van sumando las palabras que salgan del arreglo palabras en la posicion que .random nos de.

Después del ciclo retorna textoRandom

```js
function generarTextoAleatorio(){
    let indice= Math.floor(Math.random() * 50+50)
    textoRandom=" "
    for (let i=0; i<indice; i++){
        textoRandom += palabras[Math.floor(Math.random()* 200)]
    }
    return textoRandom}
```

Se genera un ciclo "for" que en que cada iteración cree dos elementos "p", uno llamado parrafo y elotro titulo parrafo, para despues añadirle a tituloParrafo 'Parrafo ' y posicion de i
Después a parrafo asinarle lo que nos retorne la función generarTextoAleatorio
Por último vincular ambos con el "body" por medio del metodo appendChild
```js
for (let i=0; i < 5; i++){
    const parrafo= document.createElement('p')
    const tituloParrafo= document.createElement('p')
    tituloParrafo.textContent = `Parrafo ${i+1}`
    parrafo.textContent = generarTextoAleatorio()
    body.appendChild(tituloParrafo)
    body.appendChild(parrafo)
}
```
