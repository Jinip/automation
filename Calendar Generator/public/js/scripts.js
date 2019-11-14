document.getElementById("submit").addEventListener("click", createCalendar);

$.get("/listEvents", 
    data => {
        console.log(data);
        console.log("success");
    }
)

function createCalendar(){
    let shifts = document.getElementsByClassName("shift");
    console.log(shifts);
    let schedule = [];
    for (var i = 0; i < shifts.length; i++){
        let weekday = shifts[i].getElementsByClassName("week-day")[0].innerHTML;
        let timeIn = shifts[i].getElementsByClassName("time-in")[0].value + " " + shifts[i].getElementsByClassName("ampm-in")[0].value;
        let timeOut = shifts[i].getElementsByClassName("time-out")[0].value + " " + shifts[i].getElementsByClassName("ampm-out")[0].value;
        schedule.push({
            day: weekday,
            in: timeIn,
            out: timeOut
        })
    }

 
}

