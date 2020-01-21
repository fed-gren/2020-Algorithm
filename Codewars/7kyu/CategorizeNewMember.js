/**
 * URL: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
 * Type: Fundamental
 */

const { Test } = require('../../kata');

const openOrSenior = data => data.map(item => (item[0] >= 55 && item[1] > 7) ? 'Senior' : 'Open');

Test.assertSimilar(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]), ['Open', 'Senior', 'Open', 'Senior'])
Test.assertSimilar(openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]), ['Open', 'Open', 'Open', 'Open'])
Test.assertSimilar(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]), ['Senior', 'Open', 'Open', 'Open'])
