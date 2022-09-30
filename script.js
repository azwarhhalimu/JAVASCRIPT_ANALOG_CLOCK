let hour = document.getElementById("hour");
let minute = document.getElementById("minute");

let second = document.getElementById("second");

let set_clock = setInterval(() => {
  let date_now = new Date();
  let _hr = date_now.getHours();
  let _mt = date_now.getMinutes();
  let _sc = date_now.getSeconds();

  let calc_hr = _hr * 30 + _mt / 2;
  let calc_min = _mt * 6 + _sc / 10;
  let calc_sec = _sc * 6;

  hour.style.transform = "rotate(" + calc_hr + "deg)";
  minute.style.transform = "rotate(" + calc_min + "deg)";
  second.style.transform = "rotate(" + calc_sec + "deg)";
}, 1000);
