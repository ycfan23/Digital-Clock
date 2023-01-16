function show_time() {
  let date = new Date();

  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let session = 'AM';

  if (hour > 12) {
    hour = hour - 12 ;//
    session = 'PM';
  }
  hour = (hour < 10)? `0${hour}` : hour;
  min = (min < 10)? `0${min}` : min;
  sec = (sec < 10)? `0${sec}` : sec;

  let time = `${hour}: ${min}: ${sec} ${session}.`
  document.getElementById('display_wrapper').innerText = time;
  setTimeout(show_time, 1000);
}

show_time();