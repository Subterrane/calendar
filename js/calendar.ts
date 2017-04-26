document.addEventListener("DOMContentLoaded", event => {
    let calendars = document.getElementsByTagName('calendar');

    for (let ix = 0; ix < calendars.length; ix++) {
        let calendarEl = calendars[ix];
        let now = new Date();

        let y = parseInt(calendarEl.getAttribute('year')) || now.getFullYear();
        let m = parseInt(calendarEl.getAttribute('month')) || now.getMonth();
        let d = parseInt(calendarEl.getAttribute('day')) || now.getDate();

        let time = new Date(y, m - 1, d);
        let month = time.getMonth();
        let week = 1;
        let day = 1;
        let html = `<year number="${y}"><month number="${m}"><week number="${week}">`;

        time.setDate(day);

        do {
            if (time.getDay() % 7 === 0) html += `</week><week number="${++week}">`;
            html += `<day number="${day}"></day>`;
            time.setDate(++day);
        } while (month === time.getMonth());

        html += '</week></month>'
        calendarEl.innerHTML = html;

        calendarEl.querySelector('day[number="' + d + '"]').classList.add('today');
    }

    let days = document.querySelectorAll('day');
    for (let ix = 0; ix < days.length; ix++) {
        days[ix].addEventListener('click', dayClicked);
    }
});

function dayClicked() {
    let el = this;
    let data = {
        year: el.parentElement.parentElement.parentElement.getAttribute('number'),
        month: el.parentElement.parentElement.getAttribute('number'),
        week: el.parentElement.getAttribute('number'),
        day: el.getAttribute('number')
    };
    var event = new CustomEvent('calendarClicked', { 'detail': data });
    document.dispatchEvent(event);
}
