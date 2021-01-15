//**
 * Problem: [Hard]
 * write a function that will return available time for 2 persons, in which can they meeting.
 * this function will receive for each person:
 * (calender of meetings(2d array:string), daily work time(1d array:string)) time in military form,
 * then meeting duration in min (number)
 * 
 * Example: 
 * inputs: 
    [
      ["9:00", "10:30"],
      ["12:00", "13:00"],
      ["16:00", "18:00"],
    ],
    ["9:00", "20:00"],
    [
      ["10:00", "11:30"],
      ["12:30", "14:30"],
      ["14:30", "15:00"],
      ["16:00", "17:00"],
      ["17:15", "17:30"],
    ],
    ["10:00", "18:30"],
    30

  output: [["11:30", "12:00"],["15:00", "16:00"], ["18:00", "18:30"]]
 */

/**
 * Algorithm:
 * 1- get available time for 2 persons:
 *     1- in case of first meeting in cal1 starts at 10:00, but daily work time for him starts at 9:00,
 *        so should i include all free times to each person, so to achieve this do the following:
 *             1- for each person take start work time ['9:00'] -> duplicate it [['9:00'], ['9:00']]
 *             and add it at the start of his calender.
 *             2- for each person take end work time ['20:00'] -> duplicate it [['20:00'], ['20:00']]
 *             and add it at the end of his calender.
 *     2- to git free time:
 *             loop on the calender and in each iteration for [x1, y1] , [x2, y2]
 *             compare y1, x2 -> if (y1 < x2) so take this pair as free time period (push [y1, x2] to free time array)
 *             if (y1 = x2) skip this one and fo to next value.
 *
 * 2- compare free times of 2 persons and get matching free time:
 *      take every free time period form first person and compare it with all free times of second user
 *      here we need no execute 2 for loop inside each other.
 *      in each iteration do the following:
 *          [10:30, 12:00], [11:30, 12:30] to get match free time from this 2 values:
 *              1- get the bigger value of (10:30, 11:30)
 *              2- get the smaller value of (12:00, 12:30)
 *              you will get (11:30, 12:00), that is first matching time,
 *              before we add it to output array we should validate it.
 *              3- validate matching time:
 *                  if( x = y || x > y) this mean that is not a valid time, so break the loop, and move to next value
 *                  if( x < y && y - x => meeting duration ) this mean that is a valid time, so push it to output array.
 */

// Solution:

/**
 * Convert time from hours to minutes, to make math operation on it
 * @param {string} hour // '12:00'
 * @returns {number} minutes = 12*60 + 00 = 720
 */
const toMinutes = (hour) => {
  let time = hour.split(":"); // ['12', '00']
  return Number(time[0]) * 60 + Number(time[1]); // 720
};

/**
 * Add daily work time to calender to get all available time in calender,
 * from start of day till end of day
 * @param {array 2d:string} calender
 * @param {array 1d:string} dailyTime
 * @returns {array 2d:string} full time calender
 */
const addDailyTimeToCalender = (calender, dailyTime) => {
  let startPair = [dailyTime[0], dailyTime[0]];
  let endPair = [dailyTime[1], dailyTime[1]];
  calender.unshift(startPair);
  calender.push(endPair);
  return calender;
};

/**
 * Get free time in the calender
 * @param {array 2d:string} calender
 * @returns {array 2d:string}
 */
const getFreeTime = (calender) => {
  let freeTime = [];
  for (let i = 0; i < calender.length - 1; i++) {
    let startPoint = toMinutes(calender[i][1]);
    let endPoint = toMinutes(calender[i + 1][0]);
    if (startPoint == endPoint) {
      continue;
    } else {
      // of course endPoint will be bigger than startPoint, never smaller
      freeTime.push([calender[i][1], calender[i + 1][0]]);
    }
  }
  return freeTime;
};

/**
 * Check if matching time is even valid time or not
 * @param {array 1d:string} matchingTime
 * @param {array 1d:string} meetingDuration
 * @returns {boolean}
 */
const matchingTimeValidation = (matchingTime, meetingDuration) => {
  // if start point = end point => there is no free time,
  // or if start point > end point => that is not valid time
  if (
    toMinutes(matchingTime[0]) < toMinutes(matchingTime[1]) &&
    toMinutes(matchingTime[1]) - toMinutes(matchingTime[0]) >= meetingDuration
  ) {
    console.log("Valid time");
    return true;
  } else {
    console.log("Not valid time");
    return false;
  }
};

/**
 * Give available time to meet
 * @param {array 2d:string} calendar1 calender of user 1
 * @param {array:string} dailyTime1 daily work tome for user 1
 * @param {array 2d:string} calendar2 calender of user 2
 * @param {array:string} dailyTime2 daily work tome for user 2
 * @param {number} meetingDuration meeting duration in minutes
 * @returns {array 2d:string} array of matching times, in which can they both meeting
 */
const calenderMatching = (
  calendar1,
  dailyTime1,
  calendar2,
  dailyTime2,
  meetingDuration
) => {
  // 1- add daily work time to meeting calender
  calendar1 = addDailyTimeToCalender(calendar1, dailyTime1);
  calendar2 = addDailyTimeToCalender(calendar2, dailyTime2);
  // 2- get free time in each calender
  let calender1FreeTime = getFreeTime(calendar1);
  let calender2FreeTime = getFreeTime(calendar2);
  console.log("calender1FreeTime:", calender1FreeTime);
  console.log("calender2FreeTime:", calender2FreeTime);
  console.log("***************** Start comparing *****************");
  // -3 compare 2 calenders and return matching time
  let AllMatchingTime = [],
    startPoint1,
    endPoint1,
    startPoint2,
    endPoint2;
  for (let i = 0; i < calender1FreeTime.length; i++) {
    for (let j = 0; j < calender2FreeTime.length; j++) {
      console.log("iteration: ", i, calender1FreeTime[i]);
      console.log("sub-iteration: ", j, calender2FreeTime[j]);
      // [x1, y1] [x2,y2] => [big(x1, x2), small(y1, y2)] = matchingTime[]
      let matchingTime = [];
      //--------------------------------------------
      startPoint1 = toMinutes(calender1FreeTime[i][0]); // x1
      startPoint2 = toMinutes(calender2FreeTime[j][0]); // x2
      // get the bigger startPoint
      if (startPoint1 > startPoint2) {
        matchingTime.push(calender1FreeTime[i][0]);
      } else {
        // either startPoint2 is greater or they both are equal
        matchingTime.push(calender2FreeTime[j][0]);
      }
      //--------------------------------------------
      endPoint1 = toMinutes(calender1FreeTime[i][1]); // y1
      endPoint2 = toMinutes(calender2FreeTime[j][1]); // y2
      // get the smaller endTime
      if (endPoint1 < endPoint2) {
        matchingTime.push(calender1FreeTime[i][1]);
      } else {
        // either endPoint2 is smaller or they both are equal
        matchingTime.push(calender2FreeTime[j][1]);
      }
      //--------------------------------------------
      // [big(x1, x2), small(y1, y2)] = matchingTime[]
      console.log("Matching Pair: ", matchingTime);
      // validate matchingTime
      let isValid = matchingTimeValidation(matchingTime, meetingDuration);
      // this is a valid time => push it to output array
      if (isValid) AllMatchingTime.push(matchingTime);
      console.log("---");
    }
    console.log("#########################");
  }
  return AllMatchingTime;
};

console.log(
  calenderMatching(
    [
      ["9:00", "10:30"],
      ["12:00", "13:00"],
      ["16:00", "18:00"],
    ],
    ["9:00", "20:00"],
    [
      ["10:00", "11:30"],
      ["12:30", "14:30"],
      ["14:30", "15:00"],
      ["16:00", "17:00"],
      ["17:15", "17:30"],
    ],
    ["10:00", "18:30"],
    30
  )
);
