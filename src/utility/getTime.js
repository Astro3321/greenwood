//Returns formatted time in the format HH/MM/SS
export default function getTime(){
    // Creating DateTime Object 
    var datetimeObj = new Date(); 
    //Formatting Time
    var time = datetimeObj.getHours() + ":"  + datetimeObj.getMinutes() + ":" + datetimeObj.getSeconds();

    return time;
}