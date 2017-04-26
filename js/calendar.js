"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
    var calendarEl = document.getElementsByTagName('calendar')[0];
    var time = new Date();
    var month = time.getMonth();
    var day = 1;
    time.setDate(day);
    var ix = 0;
    while (ix++ < time.getDay()) {
        calendarEl.appendChild(createDayElement());
    }
    do {
        time.setDate(day);
        calendarEl.appendChild(createDayElement(day++));
    } while (time.getMonth() === month);
});
function createDayElement(content) {
    var el = document.createElement('day');
    el.innerHTML = content || '';
    return el;
}
