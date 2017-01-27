/**
 * Created by Mykola Bubelich
 * 2017-01-20
 */

import test from 'tape'
import JSBlake2s from '../lib/jsblake2s.min'

test('Benchmark for JSBlake2s', tape => {
  'use strict'

  const t1 = new Date().getTime()

  const data = new Uint8Array([0x61, 0x62, 0x63])
  const count = 100000
  let res

  for (let i = 0; i < count; i++) {
    res = new JSBlake2s().update(data).digest()
    if (res[0] !== 0x50 || res[31] !== 0x82) {
      tape.fail('Wrong result')
      break
    }
  }

  const t2 = new Date().getTime() - t1

  tape.comment(`Benchmark test for ${count} iteration: ${t2} ms`)

  tape.end()
})
