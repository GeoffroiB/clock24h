let hr = document.getElementById('hand_hour');
let min = document.getElementById('hand_min');
let sec = document.getElementById('hand_sec');

let clock = document.getElementById('clock');

function setupClock() {
    const clock_numbers = document.getElementById("clock-numbers");
    const clock_ticks = document.getElementById("clock-ticks");
    
    for (let i = 1; i <= 24; ++i) {
        const s = document.createElement("span");
        s.className = "clock-number-hour";
        s.style.setProperty("--i", i);
    
        const b = document.createElement("b");
        b.innerText = i.toString();
        s.appendChild(b);
    
        clock_numbers.append(s);
    }

    for (let i = 1; i <= 60; ++i) {
        const s = document.createElement("span");
        s.className = "clock-tick";
        s.style.setProperty("--i", i);
    
        const b = document.createElement("b");
        // b.innerText = i.toString();
        s.appendChild(b);

        clock_ticks.appendChild(s);
    }

    for (let i = 0; i < 12; ++i) {
        const s = document.createElement("span");
        s.className = "clock-tickn";
        s.style.setProperty("--i", i);
    
        const b = document.createElement("b");
        b.innerText = (i*5).toString().padStart(2, "0");
        s.appendChild(b);

        clock_ticks.appendChild(s);
    }
}

function displayTime(){
    const date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let ms = date.getMilliseconds();

    // let hRotation = 15*(hh + mm/60);
    // let mRotation = 6*(mm + ss/60);
    // let sRotation = 6*(ss + ms/1000);

    let hRotation = 15*hh;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    let nextSecondDelay = 1000 - (new Date()).getMilliseconds();
    setTimeout(displayTime, nextSecondDelay);
}

// -----------------------------------------------------------------------------

(() => {
    setupClock();
    displayTime();
})();

