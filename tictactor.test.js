const tictactor = require('./tictactor');
test('tictactor [[1,2,0],[2,0,1],[0,1,0]] to equal null', () => {
  expect(tictactor([[1,2,0],[2,0,1],[0,1,0]])).toBe(null);
});

  test('tictactor [[1,1,1],[2,2,1],[2,1,2]] to equal X Win', () => {
    expect(tictactor([[1,1,1],[2,2,1],[2,1,2]])).toBe('X Win');
  });

  test('tictactor [[1,2,1],[2,2,2],[2,1,1]] to equal O Win', () => {
    expect(tictactor([[1,2,1],[2,2,2],[2,1,1]])).toBe('O Win');
  });

  test('tictactor [[1,2,2],[2,1,1],[1,1,1]] to equal X Win', () => {
    expect(tictactor([[1,2,2],[2,1,1],[1,1,1]])).toBe('X Win');
  });

  test('tictactor [[1,2,1],[1,2,1],[1,1,2]] to equal X Win', () => {
    expect(tictactor([[1,2,1],[1,2,1],[1,1,2]])).toBe('X Win');
  });

  test('tictactor [[1,2,2],[2,1,2],[1,1,2]] to equal O Win', () => {
    expect(tictactor([[1,2,2],[2,1,2],[1,1,2]])).toBe('O Win');
  });

  test('tictactor [[1,2,1],[2,1,1],[1,1,2]] to equal X Win', () => {
    expect(tictactor([[1,2,1],[2,1,1],[1,1,2]])).toBe('X Win');
  });

  test('tictactor [[1,2,1],[2,1,1],[2,1,2]] to equal Draw', () => {
    expect(tictactor([[1,2,1],[2,1,1],[2,1,2]])).toBe('Draw');
  });

  test('tictactor [[1,2,1],[1,2,1],[1,2,2]] to equal Draw', () => {
    expect(tictactor([[1,2,1],[2,1,1],[2,1,2]])).toBe('Draw');
  });

  test('tictactor [[1,2,1],[1,1,1],[2,2,1]] to equal Draw', () => {
    expect(tictactor([[1,2,1],[2,1,1],[2,1,2]])).toBe('Draw');
  });


  
  
  
