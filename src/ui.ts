import {
  partida,
  generarNumeroAleatorio,
  calcularEstado,
  calcularPuntuacion,
} from "./motor";
import * as model from "./model";

export function mostrarMensaje(mensaje: string) {
  let gameOverElement = document.getElementById("gameover");
  if (gameOverElement && gameOverElement instanceof HTMLElement) {
    gameOverElement.innerHTML = mensaje;
  }
}

export function infoPlantarse() {
  const botonCarta = document.getElementById("dameCarta");

  if (botonCarta && botonCarta instanceof HTMLButtonElement) {
    botonCarta.disabled = true;
  }

  mostrarMensaje(partida.mensaje);
}

export function muestraPuntuacion(): void {
  let puntuacionElement = document.getElementById("puntuacion");

  if (puntuacionElement && puntuacionElement instanceof HTMLElement) {
    puntuacionElement.innerHTML = partida.puntuacion.toString();
  }
}

export function muestraLaCarta(carta: string): void {
  let cartaElement = document.getElementById("carta");
  if (cartaElement && cartaElement instanceof HTMLImageElement) {
    cartaElement.src = carta;
  }
}

export function reiniciarPartida() {
  partida.puntuacion = 0;
  let puntuacionElement = document.getElementById("puntuacion");

  if (puntuacionElement && puntuacionElement instanceof HTMLElement) {
    puntuacionElement.innerHTML = partida.puntuacion.toString();
  }

  muestraLaCarta(model.back);

  const botonCarta = document.getElementById("dameCarta");

  if (botonCarta && botonCarta instanceof HTMLButtonElement) {
    botonCarta.disabled = false;
  }

  mostrarMensaje(model.mensajeVacio);
}

//BOTONES:
export const botonCarta = document.getElementById("dameCarta");
if (botonCarta && botonCarta instanceof HTMLButtonElement) {
  botonCarta.addEventListener("click", dameCarta);
}

export const botonPlantarse = document.getElementById("plantarse");
if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener("click", infoPlantarse);
}

export const botonReiniciar = document.getElementById("nuevaPartida");
if (botonReiniciar && botonReiniciar instanceof HTMLButtonElement) {
  botonReiniciar.addEventListener("click", reiniciarPartida);
}

export function disableBotonCarta() {
  const botonCarta = document.getElementById("dameCarta");
  if (botonCarta && botonCarta instanceof HTMLButtonElement) {
    botonCarta.disabled = true;
  }
}

////////////////

export function dameCarta(): void {
  let numeroAleatorio = generarNumeroAleatorio();

  partida.numeroActual = numeroAleatorio;

  calcularPuntuacion(numeroAleatorio);
  mostrarCarta(numeroAleatorio);
  muestraPuntuacion();
  calcularEstado();
  comprobarEstado();
}

export function comprobarEstado() {
  if (partida.estado === model.Estado.GAMEOVER) {
    mostrarMensaje(model.perdedor);
    disableBotonCarta();
  }
}

export function mostrarCarta(numeroRandom: number) {
  switch (numeroRandom) {
    case 1:
      muestraLaCarta(model.as);
      break;
    case 2:
      muestraLaCarta(model.dos);
      break;
    case 3:
      muestraLaCarta(model.tres);
      break;
    case 4:
      muestraLaCarta(model.cuatro);
      break;
    case 5:
      muestraLaCarta(model.cinco);
      break;
    case 6:
      muestraLaCarta(model.seis);
      break;
    case 7:
      muestraLaCarta(model.siete);
      break;
    case 10:
      muestraLaCarta(model.sota);
      break;
    case 11:
      muestraLaCarta(model.caballo);
      break;
    case 12:
      muestraLaCarta(model.rey);
      break;
  }
}
