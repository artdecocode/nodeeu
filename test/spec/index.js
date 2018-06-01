import { equal } from 'zoroaster/assert'
import Context from '../context'
import nodeeu from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof nodeeu, 'function')
  },
  async 'calls package without error'() {
    await nodeeu()
  },
  async 'calls test context method'({ example }) {
    await example()
  },
}

export default T
