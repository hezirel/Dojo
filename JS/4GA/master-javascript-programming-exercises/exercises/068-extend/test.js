const rewire = require("rewire");

test('Function "extend" must exist', () => {
    const extend = rewire("./app.js").__get__("extend");
    expect(extend).not.toBe(undefined);
});

test('The function must add the properties of the 2nd object to the first one. ', () => {
    const extend = rewire('./app.js').__get__("extend");
    var obj1 = {
        a: 1,
        b: 2
    }
    var obj2 = {
        b: 4,
        c: 3
    }
    extend(obj1, obj2)
    var output = obj1
    expect(output).toEqual({ a: 1, b: 2, c: 3 })
})

test('If the first object already has the given key, ignore it(don\'t override the property value).', () => {
    const extend = rewire('./app.js').__get__("extend");
    var obj1 = {
        a: 74,
        b: 22
    }
    var obj2 = {
        b: 2227,
        c: 91
    }
    extend(obj1, obj2)
    var output = obj1
    expect(output).toEqual({ a: 74, b: 22, c: 91 })
})