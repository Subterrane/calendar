document.addEventListener("DOMContentLoaded", event => {
    let calendarEl = document.getElementsByTagName('calendar')[0];
    let time = new Date();
    let month = time.getMonth();
    let week = 1;
    let day = 1;
    let html = `<month number="${month + 1}"><week number="${week}">`;

    do {
        time.setDate(day);
        if(time.getDay() % 7 === 0) html += `</week><week number="${++week}">`;
        html += `<day number="${day}"></day>`;
        day++;
    } while(month === time.getMonth());

    html += '</week></month>'
    calendarEl.innerHTML = html;
});
