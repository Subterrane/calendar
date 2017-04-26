"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
    var calendarEl = document.getElementsByTagName('calendar')[0];
    var now = new Date();
    var y = parseInt(calendarEl.getAttribute('year')) || now.getFullYear();
    var m = parseInt(calendarEl.getAttribute('month')) || now.getMonth();
    var d = parseInt(calendarEl.getAttribute('day')) || now.getDate();
    var time = new Date(y, --m, d);
    var month = time.getMonth();
    var week = 1;
    var day = 1;
    var html = "<month number=\"" + (month + 1) + "\"><week number=\"" + week + "\">";
    do {
        time.setDate(day);
        if (time.getDay() % 7 === 0)
            html += "</week><week number=\"" + ++week + "\">";
        html += "<day number=\"" + day + "\"></day>";
        day++;
    } while (month === time.getMonth());
    html += '</week></month>';
    calendarEl.innerHTML = html;
});
