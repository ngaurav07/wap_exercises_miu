describe('max', () => {
    it('should return the maximum of two numbers', () => {
        expect(max(3, 5)).to.equal(5);
        expect(max(10, 2)).to.equal(10);
    });
});

describe('maxOfThree', () => {
    it('should return the maximum of three numbers', () => {
        expect(maxOfThree(3, 5, 2)).to.equal(5);
        expect(maxOfThree(10, 15, 12)).to.equal(15);
    });
});

describe('isVowel', () => {
    it('should return true if the character is a vowel', () => {
        expect(isVowel('a')).to.be.true;
        expect(isVowel('E')).to.be.true;
    });

    it('should return false if the character is not a vowel', () => {
        expect(isVowel('b')).to.be.false;
        expect(isVowel('z')).to.be.false;
    });
});

describe('sum', () => {
    it('should return the sum of an array of numbers', () => {
        expect(sum([1, 2, 3, 4])).to.equal(10);
        expect(sum([10, 20, 30])).to.equal(60);
    });
});

describe('multiply', () => {
    it('should return the product of an array of numbers', () => {
        expect(multiply([1, 2, 3, 4])).to.equal(24);
        expect(multiply([10, 20, 30])).to.equal(6000);
    });
});

describe('reverse', () => {
    it('should return the reverse of a string', () => {
        expect(reverse('hello')).to.equal('olleh');
        expect(reverse('world')).to.equal('dlrow');
    });
});

describe('findLongestWord', () => {
    it('should return the length of the longest word in an array', () => {
        expect(findLongestWord(['apple', 'banana', 'cherry'])).to.equal(6);
        expect(findLongestWord(['dog', 'elephant', 'cat'])).to.equal(8);
    });
});

describe('filterLongWords', () => {
    it('should return an array of words longer than a given length', () => {
        expect(filterLongWords(['apple', 'banana', 'cherry'], 5)).to.deep.equal(['banana', 'cherry']);
        expect(filterLongWords(['dog', 'elephant', 'cat'], 3)).to.deep.equal(['elephant']);
    });
});