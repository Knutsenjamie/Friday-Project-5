import Age from './../src/galacticlife.js'

describe ('Age', () => {
  
  test ('should correctly create age object', () => {
  const Age = new Age (25);
  expect (age.conversion1).toEqual(25)
  expect (age.conversion2).toEqual(25)
  expect (age.conversion3).toEqual(25)
  expect (age.conversion4).toEqual(25)
  });

});