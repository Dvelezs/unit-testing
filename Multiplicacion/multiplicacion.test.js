const multiplicar = require('./multiplicacion');

// Pruebas para la función de multiplicación
test('multiplicar 2 * 3 es igual a 6', () => {
  expect(multiplicar(2, 3)).toBe(6);
});

test('multiplicar -4 * 5 es igual a -20', () => {
  expect(multiplicar(-4, 5)).toBe(-20);
});

// Agrega más pruebas según necesites

