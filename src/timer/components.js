import React, { PropTypes } from 'react'

export const Timer = ({ start, stop, reset, time, status }) => (
  <div>
    <p>
      { time } ({ status })
    </p>
    <button
      disabled={status === 'Running'}
      onClick={() => reset()}>
      Reset
    </button>
    <button
      disabled={status === 'Running'}
      onClick={() => start()}>
      Start
    </button>
    <button
      disabled={status === 'Stopped'}
      onClick={stop}>
      Stop
    </button>
  </div>
)

Timer.propTypes = {
  start: React.PropTypes.func.isRequired,
  stop: React.PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}
