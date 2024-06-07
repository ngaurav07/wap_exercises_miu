const chai = require('chai');
const expect = chai.expect;


describe('String.prototype.filter', function() {
    it('should remove the specified substring from the string', function() {
        expect('This is a test string'.filter('test ')).to.equal('This is a string');
    });
    
    it('should return the original string if the substring is not found', function() {
        expect('Hello, world!'.filter('foo')).to.equal('Hello, world!');
    });
});

describe('Array.prototype.bubbleSort', function() {
    it('should sort an array of numbers in ascending order', function() {
        expect([5, 3, 8, 4, 2].bubbleSort()).to.deep.equal([2, 3, 4, 5, 8]);
    });
    
    it('should handle an already sorted array', function() {
        expect([1, 2, 3, 4, 5].bubbleSort()).to.deep.equal([1, 2, 3, 4, 5]);
    });
    
    it('should handle an empty array', function() {
        expect([].bubbleSort()).to.deep.equal([]);
    });
});

describe('Teacher.prototype.teach', function() {
    it('should return the correct teaching message', function() {
        var teacher = new Teacher();
        teacher.initialize('gaurav', 25);
        expect(teacher.teach('Math')).to.equal('gaurav is now teaching Math');
    });
});