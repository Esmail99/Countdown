// set event date,time then get it since 1970 ..
var eventTimeFunc = () =>{
    //set event Date..
    var newEventDate = new Date(eventDate.value);
    //set event Time..
    var newEventTime = eventTime.value;
    const hours = newEventTime.split(':')[0];
    const minutes = newEventTime.split(':')[1];
    newEventDate.setHours(hours,minutes,0,0);
    const eventTimeBySeconds = newEventDate.getTime()/1000;
    return eventTimeBySeconds;
}

export default eventTimeFunc;