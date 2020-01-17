/**
 * URL: https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
 * Type: Binary
 */

const { Test } = require('../../kata');

const binaryArrayToNumber = arr => parseInt(arr.reduce((acc, cur) => acc + cur, ''), 2);

Test.describe("One's and Zero's", () => {

  Test.it("Example tests", () => {
    Test.assertEquals(binaryArrayToNumber([0, 0, 0, 1]), 1);
    Test.assertEquals(binaryArrayToNumber([0, 0, 1, 0]), 2);
    Test.assertEquals(binaryArrayToNumber([1, 1, 1, 1]), 15);
    Test.assertEquals(binaryArrayToNumber([0, 1, 1, 0]), 6);
  });

});