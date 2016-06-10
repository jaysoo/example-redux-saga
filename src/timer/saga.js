import { actionChannel, call, take, put, select } from 'redux-saga/effects'
import * as actions from './actions'

const ONE_SECOND = 1000

// wait :: Number -> Promise
const wait = ms => (
  new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
)

function* runTimer() {
  const channel = yield actionChannel('START')
  // Wake up when user starts timer.
  while(yield take(channel)) {
    while(true) {
      // This side effect is not run yet, so it can be treated
      // as data, making it easier to test if needed.
      yield call(wait, ONE_SECOND)

      const state = yield select()

      // Check if the timer is still running.
      // If so, then dispatch a TICK.
      if (state.status === 'Running') {
        yield put(actions.tick())
        // Otherwise, go idle until user starts the timer again.
      } else {
        break
      }
    }
  }
}

export default runTimer

