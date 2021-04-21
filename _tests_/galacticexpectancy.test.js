import Expector from './../src/galacticexpectancy'


describe ('Expector', () => {
  
  test ('should correctly create expector class/object', () => {
  const expector = new Expector(78.54,25);
  expect (expector.earthLifeExpectancy).toEqual(78.54)
  });
  
});