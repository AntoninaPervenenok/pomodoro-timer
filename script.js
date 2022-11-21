const startButton = document.getElementById("start");
const time = document.getElementById("pomodoro-time");
const promodoroButton = document.getElementById("pomodoro");
const breakButton = document.getElementById("break");
const resetButton = document.getElementById("reset");
let minutes;
let seconds;
let timer;

function timerId() {
    seconds--;

    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }
    let minute = minutes < 10 ? '0' + minutes : minutes;
    let second = seconds < 10 ? '0' + seconds : seconds;

    if (minutes == 0 && seconds == 0) {
        clearInterval(timer);
        return time.innerHTML = "00 : 00";
    }

    time.innerHTML = minute + ':' + second;

}
//------------------------------------
promodoroButton.addEventListener('click', function() {
        breakButton.classList.remove('active');
        promodoroButton.classList.add('active');
        minutes = "25";
        seconds = "00";
        time.innerHTML = minutes + ':' + seconds;

        startButton.addEventListener('click', function start() {
            clearInterval(timer);
            timer = setInterval(timerId, 10);
            startButton.innerHTML = 'stop';
            this.removeEventListener('click', start)
            this.addEventListener('click', function stop() {
                startButton.innerHTML = 'start';
                clearInterval(timer);
                this.removeEventListener('click', stop)
                this.addEventListener('click', start);
                if (minutes == 0 && seconds == 0) {
                    startButton.innerHTML = 'start';
                    clearInterval(timer);
                    minutes = '25';
                    seconds = '00';
                    time.innerHTML = minutes + ':' + seconds;
                }
            });

        });
        resetButton.addEventListener('click', function() {
            clearInterval(timer);
            minutes = '25';
            seconds = '00';
            time.innerHTML = minutes + ':' + seconds;
        });

    })
    //-------------------------------------------
breakButton.addEventListener('click', function() {
    breakButton.classList.add('active');
    promodoroButton.classList.remove('active');
    minutes = "05";
    seconds = "00";
    time.innerHTML = minutes + ':' + seconds;
    startButton.addEventListener('click', function start() {
        clearInterval(timer);
        timer = setInterval(timerId, 10);
        startButton.innerHTML = 'stop';
        this.removeEventListener('click', start)
        this.addEventListener('click', function stop() {
            startButton.innerHTML = 'start';
            clearInterval(timer);
            this.removeEventListener('click', stop)

            if (minutes == 0 && seconds == 0) {
                startButton.innerHTML = 'start';
                clearInterval(timer);
                minutes = '05';
                seconds = '00';
                time.innerHTML = minutes + ':' + seconds;
            }
            this.addEventListener('click', start);


        });

    });
    resetButton.addEventListener('click', function() {
        clearInterval(timer);
        minutes = '05';
        seconds = '00';
        time.innerHTML = minutes + ':' + seconds;
    });
});