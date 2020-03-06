// get the time left for the event (days,hours,...) and display the timer
import timeLeft from './timeLeft.js';

var reloadTimer = () => {
    // Math.floor() to remove the decimal parts ..
    let secondsLeft = Math.floor(timeLeft()%60);
    secondsLeft = secondsLeft.toString();
    let minutesLeft = Math.floor((timeLeft()/60)%60);
    minutesLeft = minutesLeft.toString();
    let hoursLeft = Math.floor((timeLeft()/60/60)%24);
    hoursLeft = hoursLeft.toString();
    let daysLeft = Math.floor(timeLeft()/60/60/24);
    daysLeft = daysLeft.toString();
    if(daysLeft<0){daysLeft='0'}
    if(hoursLeft<0){hoursLeft='0'}
    if(minutesLeft<0){minutesLeft='0'}
    if(secondsLeft<0){
        secondsLeft='0'
        // hide the countdown block..
        countdown.style.display = 'none';
        // display 'the event has begun' header..
        eventStarted.style.visibility = 'visible';
    }
    // display the timer 
    seconds.innerHTML = secondsLeft.padStart(2,'0');
    minutes.innerHTML = minutesLeft.padStart(2,'0');
    hours.innerHTML = hoursLeft.padStart(2,'0');
    days.innerHTML = daysLeft.padStart(2,'0');
}

export default reloadTimer;