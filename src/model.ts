export interface Partida {
  puntuacion: number;
  numeroActual: number;
  estado: Estado;
  mensaje: string;
}

export const partidaPorDefecto = (): Partida => ({
  puntuacion: 0,
  numeroActual: 0,
  estado: Estado.MENOR4,
  mensaje: conservador,
});

export enum Estado {
  MENOR4,
  MENOR6,
  MENOR7,
  SIETEYMEDIO,
  GAMEOVER,
}

export const conservador: string = "Has sido muy conservador amigo!!!!! 😗";
export const cagado: string = "Te ha entrado el canguelo eh? 💩";
export const rozando: string = "Casi casi... que suerte!! 👀";
export const crack: string = "¡Lo has clavado! ¡Enhorabuena! 🥳🥳🥳";
export const perdedor: string = "Te has pasado de 7.5 puntos. Has perdido!! 😟";
export const mensajeVacio: string = "";

export const as: string =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
export const dos: string =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
export const tres: string =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
export const cuatro: string =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
export const cinco: string =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
export const seis: string =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
export const siete: string =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
export const sota: string =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
export const caballo: string =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
export const rey: string =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
export const back: string =
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
