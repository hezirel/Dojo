const rewire = require ("rewire");

test('Function computePerimeterOfARectangle must exist', () => {
    const computePerimeterOfARectangle = rewire("./app.js").__get__("computePerimeterOfARectangle");
    expect(computePerimeterOfARectangle).not.toBe(undefined);
});

test('Fuction must return the perimeter of Rectangle', () => {
    const computePerimeterOfARectangle = rewire('./app.js').__get__("computePerimeterOfARectangle");

    expect(computePerimeterOfARectangle(5, 2)).toBe(14)
    expect(computePerimeterOfARectangle(7, 4)).toBe(22)
})
