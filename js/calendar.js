"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
    var calendars = document.getElementsByTagName('calendar');
    for (var ix = 0; ix < calendars.length; ix++) {
        var calendarEl = calendars[ix];
        var now = new Date();
        var y = parseInt(calendarEl.getAttribute('year')) || now.getFullYear();
        var m = parseInt(calendarEl.getAttribute('month')) || now.getMonth();
        var d = parseInt(calendarEl.getAttribute('day')) || now.getDate();
        var time = new Date(y, m - 1, d);
        var month = time.getMonth();
        var week = 1;
        var day = 1;
        var html = "<year number=\"" + y + "\"><month number=\"" + m + "\"><week number=\"" + week + "\">";
        do {
            time.setDate(day);
            if (time.getDay() % 7 === 0)
                html += "</week><week number=\"" + ++week + "\">";
            html += "<day number=\"" + day + "\"></day>";
            day++;
        } while (month === time.getMonth());
        html += '</week></month>';
        calendarEl.innerHTML = html;
        calendarEl.querySelector('day[number="' + d + '"]').classList.add('today');
    }
    var days = document.querySelectorAll('day');
    for (var ix = 0; ix < days.length; ix++) {
        days[ix].addEventListener('click', dayClicked);
    }
});
function dayClicked() {
    var el = this;
    var data = {
        year: el.parentElement.parentElement.parentElement.getAttribute('number'),
        month: el.parentElement.parentElement.getAttribute('number'),
        week: el.parentElement.getAttribute('number'),
        day: el.getAttribute('number')
    };
    var event = new CustomEvent('calendarClicked', { 'detail': data });
    document.dispatchEvent(event);
}
