let hours = document.getElementById("hh");
let mins = document.getElementById("mm");
let secs = document.getElementById("ss");

setInterval(()=> {
    let currentTime = new Date();

    hours.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    secs.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000);

