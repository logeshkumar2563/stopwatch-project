const display = document.getElementById("display");
let time = null;
let start = 00;
let end = 0;
let runner = false;


function star(){
    if(!runner){

 start = Date.now() - end;
    time = setInterval(update,10);
    runner =true;
    }
}
function stop1(){
    if(runner){
    clearInterval(time)
    end = Date.now() - start;
    runner = false;
    }
}
function reset(){
    clearInterval(time);
    start = 0;
    end = 0;
    runner =false;
    display.innerHTML = "0:00:00:00"
}
function update(){
    const curr = Date.now();
    end = curr - start;

    let hour = Math.floor(end / (1000 * 60 * 60));
    let min = Math.floor((end % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((end % (1000 * 60)) / 1000);
    let msec = Math.floor((end % 1000) / 10);

    hour = String(hour).padStart(2, '0');
    min = String(min).padStart(2, '0');
    sec = String(sec).padStart(2, '0');
    msec = String(msec).padStart(2, '0');

    display.innerHTML = `${hour}:${min}:${sec}.${msec}`;
}