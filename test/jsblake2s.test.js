/**
 * Created by Mykola Bubelich
 * 2017-01-20
 */

import test from 'tape'
import JSBlake2s from '../src/jsblake2s'
import verter from './verter'

/**
 * General Test
 */

test("Class 'JSBlake2s' should exists", tape => {
  'use strict'

  const blake = new JSBlake2s()

  tape.assert(blake instanceof JSBlake2s)

  tape.end()
})

test("Function 'update' should exists", tape => {
  'use strict'

  const blake = new JSBlake2s()

  tape.assert(typeof blake.update === 'function')

  tape.end()
})

test("Function 'digest' should exists", tape => {
  'use strict'

  const blake = new JSBlake2s()

  tape.assert(typeof blake.digest === 'function')

  tape.end()
})

/**
 * Errors
 */

test('If digest length not number, should error be thrown', tape => {
  'use strict'

  tape.throws(() => {
    new JSBlake2s(null)
  }, /Digest length should be number/)

  tape.end()
})

test('If key not Uint8Array and length more then 32 byte, should error be thrown', tape => {
  'use strict'

  tape.throws(() => {
    new JSBlake2s(32, 100)
  }, /Key should be Uint8Array with 32 byte long or null/)

  tape.throws(() => {
    new JSBlake2s(32, new Uint8Array(33))
  }, /Key should be Uint8Array with 32 byte long or null/)

  tape.end()
})

test('If salt not Uint8Array and length more then 8 byte, should error be thrown', tape => {
  'use strict'

  tape.throws(() => {
    new JSBlake2s(32, new Uint8Array(32), 9)
  }, /Salt should be Uint8Array with 8 byte long or null/)

  tape.throws(() => {
    new JSBlake2s(32, new Uint8Array(32), new Uint8Array(9))
  }, /Salt should be Uint8Array with 8 byte long or null/)

  tape.end()
})

test('If personalization not Uint8Array and length more then 8 byte, should error be thrown', tape => {
  'use strict'

  tape.throws(() => {
    new JSBlake2s(32, new Uint8Array(32), new Uint8Array(8), 9)
  }, /Personalization should be Uint8Array with 8 byte long or null/)

  tape.throws(() => {
    new JSBlake2s(32, new Uint8Array(32), new Uint8Array(8), new Uint8Array(9))
  }, /Personalization should be Uint8Array with 8 byte long or null/)

  tape.end()
})

/**
 * HASH
 */

test("Should hash 'data' and produce proper result. Default params", tape => {
  'use strict'

  for (let i = 0; i < verter.size; i++) {
    const {len, key, salt, personalization, data} = verter.input[i]
    const _out = verter.output[i]

    // hash //
    const blake = new JSBlake2s(len, key, salt, personalization)

    // assert //
    tape.deepEqual(blake.update(data).digest(), _out, `Test vector index ${i}`)
  }

  tape.end()
})
