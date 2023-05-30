'use strict';

/*1. HTML: 
        - h1 para :)
        - select con dos opciones -> :) y :(
        - Botón con texto Update
  2. CSS: 
        - reset
        - Clase para color de fondo amarillo
        - Clase para color de fondo naranja
        - Demás estilos al final***
  3. JS: 
        - Al pulsar el botón update ocurren dos cosas: 
            . Cambiar en el h1 el tipo de cara
            . Generar un número aleatorio entre 0 y 100
                Si es par -> bg color amarillo
                Si es impar -> bg color naranja
  ---> Dar clases y traer todos los elementos HTML necesarios
  ---> Asignar la clase de bg color amarillo al fondo de toda la página
  ---> Evento click en el botón + preventDefault
  ---> Para cambiar el h1: relacionarlo con el select con .value
  ---> Para cambiar el color: - Generar un número al azar entre 0 y 100
                              - Comprobar si es par con % 2 === 0
                              - Quitar y poner clases según sea par o impar
*/


//Constantes

const main = document.querySelector('.js__main');
const face = document.querySelector('.js__face');
const select = document.querySelector('.js__select');
const btn = document.querySelector('.js__btn');

//Funciones

function colorChanger (){
    const randomNumber = parseInt(Math.random()*100);
    console.log(randomNumber);
    if(randomNumber % 2 === 0) {
        main.classList.remove('orange');
        main.classList.add('yellow');
    } else {
        main.classList.remove('yellow');
        main.classList.add('orange');
    }
}

function faceChanger (event) {
    face.innerHTML = select.value;
}

function handleClickBtn (event) {
    faceChanger();
    colorChanger();
}

//Eventos

btn.addEventListener('click', handleClickBtn);
