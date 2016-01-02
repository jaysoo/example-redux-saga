const INITIAL_STATE = { status: 'Stopped'
                      , seconds: 0
                      };

export default (state = INITIAL_STATE, action = null) => {
  switch (action.type) {
    case 'START':
      return { ...state, status: 'Running' };
    case 'STOP':
      return { ...state, status: 'Stopped' };
    case 'TICK':
      return { ...state, seconds: state.seconds + 1 };
    case 'RESET':
      return { ...state, seconds: 0 };
    default:
      return state;
  }
};

