function timer(deadline) {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');


    const getTimeRemaining = () => {
        const dateStop = Date.parse(deadline);
        const dateNow = Date.parse(new Date());
        const timeRemaining = dateStop - dateNow;
        let h = Math.trunc((dateStop - dateNow) / 1000 / 60 / 60);
        let min = Math.trunc(((dateStop - dateNow) / 1000 / 60) % 60);
        let sec = Math.trunc(((dateStop - dateNow) / 1000) % 60);


        console.log(dateStop)
        return {
            timeRemaining,
            h,
            min,
            sec,
        }
    };

    const checkDate = (number) => {
        if (number < 10) {
            return `0${number}` 
        } else {
            return number
        } 
    }

    const updateClock = () => {
        const getTime = getTimeRemaining(deadline);
        timerHours.textContent = checkDate(getTime.h);
        timerMinutes.textContent = checkDate(getTime.min);
        timerSeconds.textContent = checkDate(getTime.sec);

        if (getTime.timeRemaining > 0) {
            setInterval(updateClock, 1000)
        } else {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }

    }

    updateClock();
};

export default timer