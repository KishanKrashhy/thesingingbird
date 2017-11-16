const fortune = require('../lib/fortune');
const expect = require('chai').expect;

suite('Fortune Cookie test', () => {
    test('should return a fortune', () => {
        expect(typeof fortune.getfortune() ==='string');
    });

});