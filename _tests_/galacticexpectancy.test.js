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
    const expector = new Expector (53.54)
    expect (expector.mercLifeExpect()).toEqual(144.54333333333335)
  });

  test ('should correctly return users life expectancy on venus', () => {
    const expector = new Expector (53.54,53.54,)
    expect (expector.venusLifeExpect()).toEqual(7.814838709677417)
  });

  test ('should correctly return users life expectancy on mars', () => {
    const expector = new Expector (53.54,53.54,53.54)
    expect (expector.marsLifeExpect()).toEqual([-50.06127659574469, "Sorry, you'd already be dead!"])
  });

  test ('should correctly return users life expectancy on jupiter', () => {
    const expector = new Expector (53.54,53.54,53.54,53.54)
    expect (expector.jupiterLifeExpect()).toEqual([-74.02566610455312, "Sorry, you'd already be dead!"])
  });
});