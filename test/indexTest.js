const chai = require('chai');
const expect = chai.expect;

describe('index.js', function() {

  it('should correctly multiply numbers', function() {
    let num1 = 31;
    let num2 = 2;
    let multiply = num1 * num2;
    expect(multiply).to.equal(62);  // 31 * 2 = 62
  });

  it('should generate a random number between 1 and 10', function() {
    let random = Math.floor(Math.random() * 10) + 1;
    expect(random).to.be.at.least(1);
    expect(random).to.be.at.most(10);
  });

  it('should correctly compute the modulus', function() {
    let num3 = 16;
    let num4 = 6;
    let mod = num3 % num4;
    expect(mod).to.equal(4);  // 16 % 6 = 4
  });

  it('should find the maximum number in an array', function() {
    let numbers = [1, 3, 5, 7, 9, 20];
    let max = Math.max(...numbers);
    expect(max).to.equal(20);  // max in the array is 20
  });

});
