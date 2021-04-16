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
    expect (converter.divideAge()).toEqual([104.16666666666667,40.32258064516129,13.297872340425533,2.1079258010118043])
  });

  test ('should correctly return users life expectancy on mercury', () => {
    const converter = new Converter (53.54)
    expect (converter.mercLifeExpect()).toEqual(223.083333333333333)
  }
});