import moment from 'moment';
import { compose, multiply, not, prop } from 'ramda';

// pad :: Number -> String
const pad = t => t < 10 ? `0${t}` : `${t}`;

// formatMoment :: Moment -> String
const formatMoment = m => `${pad(m.minutes())}:${pad(m.seconds())}`;

// formatTime :: Number -> String
const formatTime = compose(formatMoment, moment.duration);

// getMilliseconds :: State -> Number
const getMilliseconds = compose(multiply(1000), prop('seconds'));

// getFormattedTime :: State -> String
export const getFormattedTime = compose(formatTime, getMilliseconds);
