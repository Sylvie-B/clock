let start = document.getElementById('start');
let stop = document.getElementById('stop');
let second = document.getElementById('second');
let minute = document.getElementById('minute');
let hour = document.getElementById('hour');
let hourNum = document.getElementById('hourNum');
let minNum = document.getElementById('minNum');
let secNum = document.getElementById('secNum');

start.addEventListener('click', function (){
    let count = setInterval(function () {
        let time = new Date();
        console.log(time);
        second.style.transformOrigin = 'center bottom';
        second.style.transform = 'rotate(' + time.getSeconds()*6 + 'deg)';
        minute.style.transformOrigin = 'center bottom';
        minute.style.transform = 'rotate(' + time.getMinutes()*6 + 'deg';
        hour.style.transformOrigin = 'center bottom';
        hour.style.transform = 'rotate(' + time.getHours()*30 + 'deg';
        hourNum.innerHTML = time.getHours().toString() + ' : ';
        minNum.innerHTML = time.getMinutes().toString() + ' : ';
        secNum.innerHTML = time.getSeconds().toString();

        stop.addEventListener('click', () => {
            clearInterval(count);
        })
    }, 1000);
})
