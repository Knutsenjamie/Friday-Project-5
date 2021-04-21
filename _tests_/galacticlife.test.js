import Converter from './../src/galacticlife.js'

describe ('Converter', () => {
  
  test ('should correctly create converter class/object', () => {
  const converter = new Converter(25);
  expect (converter.age).toEqual(25)
  });

  test ('should correctly divide by Mercury planetary years and convert age', () => {
    const converter = new Converter(25);
    expect (converter.divideAgeMerc()).toEqual([104.16666666666667, "Your Age On Mercury Is: 104"])
  });

  test ('should correctly divide by Venus planetary years and convert age', () => {
    const converter = new Converter(25);
    expect (converter.divideAgeVenus()).toEqual([40.32258064516129, "Your Age On Venus Is: 40"])
  });

  test ('should correctly divide by Mars planetary years and convert age', () => {
    const converter = new Converter(25);
    expect (converter.divideAgeMars()).toEqual([13.297872340425533, "Your Age On Mars Is: 13"])
  });

});