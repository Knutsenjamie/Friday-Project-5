import Expector from './../src/galacticexpectancy'

describe ('Expector', () => {
  
  test ('should correctly create expector class/object', () => {
  const expector = new Expector(78.54,78.54,78.54,78.54);
  expect (expector.mercuryexpect).toEqual(78.54)
  expect (expector.venusexpect).toEqual(78.54)
  expect (expector.marsexpect).toEqual(78.54)
  expect (expector.jupiterexpect).toEqual(78.54)
  });

  test ('should correctly return users life expectancy on mercury', () => {
    const expector = new Expector (78.54)
    expect (expector.mercLifeExpect()).toEqual(144.54333333333335)
  });

  test ('should correctly return users life expectancy on venus', () => {
    const expector = new Expector (78.54,78.54,)
    expect (expector.venusLifeExpect()).toEqual(7.814838709677417)
  });
});