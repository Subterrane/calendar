document.addEventListener("DOMContentLoaded", event => {
    let calendarEl = document.getElementsByTagName('calendar')[0];
    let time = new Date();
    let month = time.getMonth();
    let day = 1;

    time.setDate(day);

    let ix = 0;
    while (ix++ < time.getDay()) {
        calendarEl.appendChild(createDayElement());
    }

    do {
        time.setDate(day);
        calendarEl.appendChild(createDayElement(day++));
    } while (time.getMonth() === month);
});

function createDayElement(content?) {
    let el = document.createElement('day')
    el.innerHTML = content || '';
    return el;
}