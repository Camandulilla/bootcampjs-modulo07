import { Partida } from "./model";
import * as model from "./model";

export let partida: Partida = model.partidaPorDefecto();

export function generarNumeroAleatorio(): number {
  let numeroRandom: number = Math.floor(Math.random() * 11);

  if (numeroRandom > 7) {
    numeroRandom = numeroRandom + 2;
  }
  if (numeroRandom === 0) {
    numeroRandom++;
  }
  if (numeroRandom === partida.numeroActual) {
    numeroRandom++;
  }

  return numeroRandom;
}

export function calcularPuntuacion(numeroRandom: number) {
  switch (numeroRandom) {
    case 1:
      partida.puntuacion++;
      break;
    case 2:
      partida.puntuacion = partida.puntuacion + 2;
      break;
    case 3:
      partida.puntuacion = partida.puntuacion + 3;
      break;
    case 4:
      partida.puntuacion = partida.puntuacion + 4;
      break;
    case 5:
      partida.puntuacion = partida.puntuacion + 5;
      break;
    case 6:
      partida.puntuacion = partida.puntuacion + 6;
      break;
    case 7:
      partida.puntuacion = partida.puntuacion + 7;
      break;
    case 10:
      partida.puntuacion = partida.puntuacion + 0.5;
      break;
    case 11:
      partida.puntuacion = partida.puntuacion + 0.5;
      break;
    case 12:
      partida.puntuacion = partida.puntuacion + 0.5;
      break;
  }
}

export function calcularEstado() {
  switch (true) {
    case partida.puntuacion <= 4:
      partida.estado = model.Estado.MENOR4;
      partida.mensaje = model.conservador;
      break;
    case partida.puntuacion <= 6:
      partida.estado = model.Estado.MENOR6;
      partida.mensaje = model.cagado;
      break;
    case partida.puntuacion >= 6 && partida.puntuacion < 7.5:
      partida.estado = model.Estado.MENOR7;
      partida.mensaje = model.rozando;
      break;
    case partida.puntuacion === 7.5:
      partida.estado = model.Estado.SIETEYMEDIO;
      partida.mensaje = model.crack;
      break;
    case partida.puntuacion > 7.5:
      partida.estado = model.Estado.GAMEOVER;
      partida.mensaje = model.perdedor;
      break;
  }
}
