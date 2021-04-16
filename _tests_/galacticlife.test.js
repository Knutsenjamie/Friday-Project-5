import Converter from './../src/galacticlife.js'

describe ('Converter', () => {
  
  test ('should correctly create converter class/object', () => {
  const converter = new Converter(25,25,25,25);
  expect (converter.mercurycon).toEqual(25)
  expect (converter.venuscon).toEqual(25)
  expect (converter.marscon).toEqual(25)
  expect (converter.jupitercon).toEqual(25)
  });

  test ('should correctly divide by mercury planetary years and convert age', () => {
    const converter = new Converter(25)
    expect (converter.divideAgeMerc()).toEqual(104.16666666666667)
  });

  test ('should correctly divide by venus planetary years and convert age', () => {
    const converter = new Converter(25,25)
    expect (converter.divideAgeVenus()).toEqual(40.32258064516129)
  });

});