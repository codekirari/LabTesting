const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// divide()
test('divide 20 by 2 to equal 10', () => {
    expect(calculator.divide(20, 2)).toBe(10);
});

test('divide 8 by 4 to equal 2', () => {
    expect(calculator.divide(8, 4)).toBe(2);
});

// multiply()

test('multiply 5 by 5 to equal 25', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
});

test('multiply 100 by 100 to equal 0', () => {
    expect(calculator.multiply(100, 100)).toBe(10000);
});

//divide 3.

test('divide(): retorna error cuando el divisor es 0', () => {
    expect(() => calculator.divide(10, 0)).toThrow('No se puede dividir entre 0');
});
