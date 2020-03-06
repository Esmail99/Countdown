// check inputs , make the calculations and reload every second
import reloadTimer from './reloadTimer.js';

var clicking = () => {
    // check user inputs..
    if(!eventTitle.value || !eventDate.value || !eventTime.value){
        alert('Please fill all inputs');
    }
    else{
        // hide the userInputs ..
        userInputs.style.display = 'none';
        // display countdown ..
        countdown.style.visibility = 'visible';
        // writing event name..
        h1.innerHTML = eventTitle.value;
        // make the calculations
        reloadTimer();
        // reloading timer function every second
        setInterval(reloadTimer,1000);
    }
}

export default clicking;