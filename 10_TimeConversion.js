// The Problem
/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

input: 07:05:45PM => output: 19:05:45
*/

// The Solution

function timeConversion(s) {
    if(s.includes('AM')){
        let hour = s.slice(0,2); // get hour, fisrt 2 char
        let date = s.slice(0,-2); // delete AM from the end of the date
        if(Number(hour) == 12){
            return date.slice(2).padStart(date.length, '00');
        }else{
            return date;
        }
    }else if(s.includes('PM')){
        let date = s.slice(0,-2); // delete PM from the end of the date
        let oldHour = s.slice(0,2); // get hour, fisrt 2 char
        if(Number(oldHour) == 12){
            return date;
        }else{
            let newHour = Number(oldHour) + 12;
            return date.slice(2).padStart(date.length, newHour);
        }
    }
}
