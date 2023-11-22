const restar = require('./resta');

// Pruebas para la función de resta
test('restar 5 - 3 es igual a 2', () => {
  expect(restar(5, 3)).toBe(2);
});

test('restar 10 - 7 es igual a 3', () => {
  expect(restar(10, 7)).toBe(3);
});

// Más pruebas pueden añadirse para asegurar el funcionamiento correcto
