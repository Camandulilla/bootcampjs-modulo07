import { calcularEstado, partida, generarNumeroAleatorio } from "./motor";
import { vi } from "vitest";
import * as model from "./model";

describe("calcularEstado", () => {
  it("La puntuacion del jugador es 7.5, y por tanto gana la partida con un perfect!!", () => {
    //Arrange
    const numeroEsperado: number = 7.5;
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(numeroEsperado);

    //Act
    calcularEstado();

    //Assert
    expect(partida.estado).toBe(model.Estado.SIETEYMEDIO);
    expect(partida.mensaje).toBe(model.crack);
  });
});

describe("generarNumeroAleatorio", () => {
  it("generarNumeroAleatorio => NUMERO > 7", () => {
    const numeroEsperado = 10;
    vi.spyOn(global.Math, "random").mockReturnValue(0.8);

    const resultado = generarNumeroAleatorio();

    expect(resultado).toBe(numeroEsperado);
  });

  it("generarNumeroAleatorio => NUMERO = 0", () => {
    const numeroEsperado = 1;
    vi.spyOn(global.Math, "random").mockReturnValue(0);

    const resultado = generarNumeroAleatorio();

    expect(resultado).toBe(numeroEsperado);
  });

  it("generarNumeroAleatorio => NUMERO = NUMERO ANTERIOR", () => {
    const numeroAnterior: number = 3;
    vi.spyOn(partida, "numeroActual", "get").mockReturnValue(numeroAnterior);

    const numeroEsperado = 4;
    vi.spyOn(global.Math, "random").mockReturnValue(0.3);

    const resultado = generarNumeroAleatorio();

    expect(resultado).toBe(numeroEsperado);
  });
});
