import React from 'react';
import { getFormattedTime } from './utils';

export const Timer = (
    { start
    , stop
    , reset
    , state
    }
  ) => (
    <div>
      <p>
        { getFormattedTime(state) } ({ state.status })
      </p>
      <button
        disabled={state.status === 'Running'}
        onClick={() => reset()}>
        Reset
      </button>
      <button
        disabled={state.status === 'Running'}
        onClick={() => start()}>
        Start
      </button>
      <button
        disabled={state.status === 'Stopped'}
        onClick={stop}>
        Stop
      </button>
    </div>
  );

Timer.propTypes = {
  start: React.PropTypes.func.isRequired,
  stop: React.PropTypes.func.isRequired,
  state: React.PropTypes.object.isRequired
};
