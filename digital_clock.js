const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let wrapper = document.getElementById('display_wrapper');

let cal_div = document.createElement('div');
cal_div.className = 'cal_div';
let time_div = document.createElement('div');
time_div.className = 'time_div';

function show_time() {

  let date = new Date();

  let month = months[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();
  let calendar = `${month} ${day}, ${year}`;

  cal_div.innerText = calendar;

  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let session = 'AM';

  if (hour > 12) {
    hour = hour - 12 ;//12 hour clock system;
    session = 'PM';
  }
  hour = (hour < 10)? `0${hour}` : hour;
  min = (min < 10)? `0${min}` : min;
  sec = (sec < 10)? `0${sec}` : sec;

  let time = `${hour}: ${min}: ${sec} ${session}`;
  time_div.innerText = time;
  setTimeout(show_time, 1000);
}

wrapper.append(cal_div);
wrapper.append(time_div);

show_time();