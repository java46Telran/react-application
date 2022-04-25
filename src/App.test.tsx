import LifeMatrix from './service/LifeMatrix';
const numbersInitial = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
const numbersStep1 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
const numbersStep2 = numbersInitial;
const lifeMatrix = new LifeMatrix(numbersInitial)

test('life game nextStep 1', () => {
 expect(lifeMatrix.nextStep()).toEqual(numbersStep1);
});
test('life game nextStep 2', () => {
  expect(lifeMatrix.nextStep()).toEqual(numbersStep2);
 });
