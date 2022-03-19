const mes = document.querySelector('h1 > span');
const w = document.querySelectorAll('p > strong');


const clock = () => {
    let date = new Date()
    let dayOfWeek = getWeekDay(date)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let message = ''
    let dateStop = new Date('1 january 2023').getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000
    let newYear = Math.floor(timeRemaining / 60 / 60 / 24)
    let amPm = hours >= 12 ? 'PM' : 'AM'

    function getWeekDay(date) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'] 

    return days[date.getDay()]
    }

    // определим фразу приветствия в зависимости от местного времени пользователя 

    if (hours >= 0 && hours <= 6) {
    message = 'Доброй ночи';
    } else if (hours >= 7 && hours <= 12) {
    message = 'Доброе утро';
    } else if (hours >= 12 && hours<= 18) {
    message = 'Добрый день';
    } else {
    message = 'Добрый вечер';
    }

    // выполним форматирование времени 

    hours = (hours < 10) ? '0' + hours : hours
    minutes = (minutes < 10) ? '0' + minutes : minutes
    seconds = (seconds < 10) ? '0' + seconds : seconds

    nowDate = `${hours}:${minutes}:${seconds}`

    function declOfNum(n, textForms) {   
    n = Math.abs(n) % 100; 
    var n1 = n % 10;
    if (n > 10 && n < 20) { return textForms[2]; }
    if (n1 > 1 && n1 < 5) { return textForms[1]; }
    if (n1 === 1) { return textForms[0]; }
    return textForms[2];
    }

    mes.textContent = message;
    w[0].textContent = dayOfWeek;
    w[1].textContent = nowDate + ' ' + amPm;
    w[2].textContent = newYear + ` ${declOfNum(newYear, ['день', 'дня', 'дней'])}`;
    setTimeout(clock, 1000)

};


clock();






