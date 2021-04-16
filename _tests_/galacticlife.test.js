

describe ('Converter', () => {

  test ('should correctly return planetary years')
  const converter = new Converter (0.24,0.62,1.88,11.86);
  expect (converter.mercury).toEqual(0.24)
  expect (converter.venus).toEqual(0.62)
  expect (converter.mars).toEqual(1.88)
  expect (converter.jupiter).toEqual(11.86)
});