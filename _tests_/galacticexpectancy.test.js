import Expector from './../src/galacticexpectancy'


describe ('Expector', () => {
  
  test ('should correctly create expector class/object', () => {
  const expector = new Expector(25, 78.54);
  expect (expector.age).toEqual(25)
  expect (expector.earthLifeExpectancy).toEqual(78.54)
  });
  
  test ('should correctly subtract a users age by the life expectancy on Earth', () => {
    const expector = new Expector(78.54,25);
    expect (expector.lifeExpectEquation()).toEqual(53.540000000000006)
  });

  test ('should correctly return users life expectancy on all planets', () => {
    const expector = new Expector (78.54,25)
  });
});