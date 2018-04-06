// const jestPath = require('../src/jest-path');
// const jestPath = require('../src/jest-path');
// console.log('jestPath', jestPath);

// The exact same test using async/await
describe('Gewitter should blitz and donner', () => {
  beforeAll(async () => {
    console.log('jestPath', 'huhuhuhuhuh');
  });

  it('blitz type should be as donnered type', async () => {
    expect('foo').toEqual('foo');
  });
});

// const path = require('path');
// describe('test jest-path', async () => {
//   it('should behave...', async () => {
//     const jestPath = require('../src/jest-path');
//     // console.log('jestPath', require(jestPath));

//     expect(1).toBe(1);

//     // expect(jestPath).toBe(path.resolve(process.cwd(), 'node_modules/.bin/jest'));
//   });
// });
