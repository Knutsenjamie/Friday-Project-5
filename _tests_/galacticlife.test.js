import Converter from './../src/galacticlife.js'

describe ('Converter', () => {
  
  test ('should correctly create age object', () => {
  const converter = new Converter(25,25,25,25);
  expect (converter.conversion1).toEqual(25)
  expect (converter.conversion2).toEqual(25)
  expect (converter.conversion3).toEqual(25)
  expect (converter.conversion4).toEqual(25)
  });

});