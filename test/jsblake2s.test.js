/**
 * Created by Mykola Bubelich
 * 2017-01-20
 */

import test from 'tape'
import JSBlake2s from '../lib/jsblake2s.min'
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
