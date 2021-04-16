import Converter from './../src/galacticlife.js'

describe ('Converter', () => {
  
  test ('should correctly create converter class/object', () => {
  const converter = new Converter(25,25,25,25);
  expect (converter.mercurycon).toEqual(25)
  expect (converter.venuscon).toEqual(25)
  expect (converter.marscon).toEqual(25)
  expect (converter.jupitercon).toEqual(25)
  });

  test ('should correctly divide by planetary years and convert age', () => {
    const converter = new Converter(25,25,25,25)
    expect (converter.divideAge()).toEqual([[104.16666666666667, "Your Age On Mercury Is: 104"],[40.32258064516129, "Your Age On Venus Is: 40"],[13.297872340425533, "Your Age On Mars Is: 13"],[2.1079258010118043, "Your Age On Jupiter Is: 2"]])
  });

});