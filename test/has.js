const assert = require('assert')
const bf = require('../index.js')

describe('has', () => {

  it('should return if the specified key is in an object', () => {
    const obj = {a: 1, b: 2, c: 3}
    assert.strictEqual(bf.has('a', obj), true)
  })

  it('should return if the specified key is in an object create with Object.create(null)', () => {
    const obj = Object.create(null)
    obj.a = 1
    assert.strictEqual(bf.has('a', obj), true)
  })

})