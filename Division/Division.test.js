const dividir = require('./division');

// Pruebas para la función de división
test('dividir 10 / 2 es igual a 5', () => {
  expect(dividir(10, 2)).toBe(5);
});

test('dividir 8 / 4 es igual a 2', () => {
  expect(dividir(8, 4)).toBe(2);
});

test('dividir 10 / 0 lanza un error', () => {
  expect(() => {
    dividir(10, 0);
  }).toThrow();
});

// Agrega más pruebas según necesites, considera casos límite y manejo de errores
