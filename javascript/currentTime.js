// get current time by seconds time since 1970 ..
var currentTime = () => {
    let currentTimeBySeconds = new Date().getTime()/1000;
    return currentTimeBySeconds;
}

export default currentTime;