const rewire = require("rewire");

test('Function getLongestWordOfMixedElements must exist', () => {
    const getLongestWordOfMixedElements = rewire("./app.js").__get__("getLongestWordOfMixedElements");
    expect(getLongestWordOfMixedElements).not.toBe(undefined);
});

test('Function must returns the longest string in the array.', () => {
    const getLongestWordOfMixedElements = rewire('./app.js').__get__("getLongestWordOfMixedElements");

    var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1])
    expect(output).toBe('word');
})

test('If the given array, not contains string , it should return a void string.', () => {
    const getLongestWordOfMixedElements = rewire('./app.js').__get__("getLongestWordOfMixedElements");

    var output = getLongestWordOfMixedElements([1, 2, 3, 4])
    expect(output).toBe('');
})

test('If array is void must return a void string', () => {
    const getLongestWordOfMixedElements = rewire('./app.js').__get__("getLongestWordOfMixedElements");

    var output = getLongestWordOfMixedElements([])
    expect(output).toBe('')
})
