function showTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "PM";
     if (hours>12) {
         hours-=12; // hours=hours-12
         session="AM";
             }

//using the ternary operator
hours=hours <10?"0"+hours:hours;
minutes=minutes <10?"0"+minutes:minutes;
seconds=seconds <10?"0"+seconds:seconds;
    let time=hours+":"+minutes+":"+seconds+session;
    // console.log(time);
     document.getElementById("clock").innerText =time;
    //  setTimeout(showTime,1000);
}

showTime();

setInterval(showTime,1000);