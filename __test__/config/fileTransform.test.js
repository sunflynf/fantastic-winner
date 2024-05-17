const fileTransform = require('../../configs/fileTransform');

test('process function should return the correct basename', () => {
    const sourcePath = '/home/user/myfile.txt';
    const expected = 'myfile.txt';
    const result = fileTransform.process(null, sourcePath, null);
    expect(result.code).toEqual(`module.exports = ${JSON.stringify(expected)};`);
});
  