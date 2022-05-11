const randomStrings = require('../index');

describe('Probar funcionaldiades de randomStrings', () => {
  test('Probar la funcionalidad', () => {
    expect(typeof randomStrings()).toBe('string');
  });
  test('Probar que no existe un animal', () => {
    expect(randomStrings()).not.toMatch(/pantera/);
  });
});
