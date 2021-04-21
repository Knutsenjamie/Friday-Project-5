import Expector from './../src/galacticexpectancy'

describe ('Expector', () => {
  
  test ('should correctly create expector class/object', () => {
  const expector = new Expector(78.54,78.54,78.54,78.54);
  expect (expector.mercuryexpect).toEqual(78.54)
  expect (expector.venusexpect).toEqual(78.54)
  expect (expector.marsexpect).toEqual(78.54)
  expect (expector.jupiterexpect).toEqual(78.54)
  });

  // test ('should correctly return users life expectancy on all planets', () => {
  //   const expector = new Expector (53.54,53.54,53.54,53.54)
  //   expect (expector.lifeExpect()).toEqual([[144.54333333333335, "You'd still live about 145 more years on Mercury!"], [7.814838709677417, "You'd still live about 8 more years on Venus!"], [-50.06127659574469, "-50? Sorry, you'd already be dead!"], [-74.02566610455312, "-74? Sorry, you'd already be dead!"]])
  // });
});