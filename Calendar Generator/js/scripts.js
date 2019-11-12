document.getElementById("submit").addEventListener("click", createCalendar);

function createCalendar(){
    let times = document.getElementsByClassName("time");
    let schedule = {
        monday: {
            in: times[0].value + " " + times[1].value,
            out: times[2].value + " " + times[3].value
        },
        tuesday: {
            in: times[4].value + " " + times[5].value,
            out: times[6].value + " " + times[7].value
        },
        wednesday: {
            in: times[8].value + " " + times[9].value,
            out: times[10].value + " " + times[11].value
        },
        thursday: {
            in: times[12].value + " " + times[13].value,
            out: times[14].value + " " + times[15].value
        },
        friday: {
            in: times[16].value + " " + times[17].value,
            out: times[8].value + " " + times[19].value
        },
        saturday: {
            in: times[20].value + " " + times[21].value,
            out: times[22].value + " " + times[23].value
        },
        sunday: {
            in: times[24].value + " " + times[25].value,
            out: times[26].value + " " + times[27].value
        }
    }
    console.log(schedule);
    document.getElementById("result").innerHTML = schedule;
}