// Returns formatted date in the format DD/MM/YYYY
export default function getTime(){
    // Creating DateTime Object 
    var datetimeObj = new Date(); 
    //Formatting Date
    var date = datetimeObj.getDate() + "/" + (datetimeObj.getMonth()+1)  + "/" + datetimeObj.getFullYear();

    return date;
}