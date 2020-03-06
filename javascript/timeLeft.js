// get the time left for event by seconds
import eventTimeFunc from './eventTime.js';
import currentTime from './currentTime.js';

var timeLeft = () => {
    return eventTimeFunc()-currentTime();
}

export default timeLeft;