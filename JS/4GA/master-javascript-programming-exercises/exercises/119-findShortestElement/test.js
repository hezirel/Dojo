const rewire = require("rewire");

test('Function findShortestElement must exist', () => {
    const findShortestElement = rewire("./app.js").__get__("findShortestElement");
    expect(findShortestElement).not.toBe(undefined);
});

test('Function must returns the smallest number within the array.', () => {
    const findShortestElement = rewire('./app.js').__get__("findShortestElement");

    var output = findShortestElement(['a', 'two', 'three'])
    expect(output).toBe('a');
})

test('If there are elements with the same length, then it should return the first element found.', () => {
    const findShortestElement = rewire('./app.js').__get__("findShortestElement");

    expect(findShortestElement(['i', 'was', 'here'])).toBe('i');
})

test('If array is void must return void string', () => {
    const findShortestElement = rewire('./app.js').__get__("findShortestElement");

    var output = findShortestElement([])
    expect(output).toBe('')
})
