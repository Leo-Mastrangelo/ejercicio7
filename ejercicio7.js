//ejercicio7-conjuntos.js-objetos.js
const ar_nombresfamilia = ["martin","lucio","mica", "agos", "leo"]
const nombresfamilia = new Set (ar_nombresfamilia)
console.log (nombresfamilia)

nombresfamilia.add ("leo")
console.log (nombresfamilia)


nombresfamilia.add ("JS")
console.log (nombresfamilia)

//objetos
const yo = {
    nombre: "leo ",
    apellido: "mas ",
    edad: "33 ",
    altura: "1.7 ",
    isDeveloper: true
}
console.log (yo.edad)

const lista = ([yo.nombre] + [yo.apellido] + [yo.edad] + [yo.altura] + [yo.isDeveloper])
console.log (lista)

const amigos = [
    {nombre: "joaquin ", apellido: "gonzalez ", edad: 20, altura: 1.8, isDeveloper: false},
    {nombre: "rodrigo ",apellido: "perez ",edad: 27,altura: 2.7,isDeveloper: true}]

const edadpersonas = amigos.sort ((a,b) => b.edad - a.edad) 
console.log (edadpersonas)

//fechas
const fechaactual = new Date
console.log (fechaactual)
const fechanacimineto = new Date ("March 19, 1989")
console.log (fechanacimineto)
console.log (fechaactual > fechanacimineto)
const mesnacimiento = new Date (1989,2)
console.log (mesnacimiento)
const anyonacimiento = new Date (1989,0)
console.log (anyonacimiento)