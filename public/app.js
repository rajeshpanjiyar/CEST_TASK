//change division2
function changeDiv2(bgColor, color, topicBgColor) {
  document.getElementById("div2").style.background = "" + bgColor + "";
  document.getElementById("div2").style.backgroundSize = "cover";
  document.getElementById("up").style.background = "" + color + "";
  document.querySelector(".topic").style.background = "" + topicBgColor + "";
  document.querySelector(".topic").style.color = "" + bgColor + "";
  document.querySelector(".left").style.borderColor = "" + topicBgColor + "";
  document.querySelector(".right").style.borderColor = "" + topicBgColor + "";
}

//function for the change in div3 content1
function changeContent1() {
  document.querySelector(".content1").style.display = "block";
  document.querySelector(".content2").style.display = "none";
  document.querySelector(".content3").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.querySelector(".div3").style.background = "white";
  document.querySelector(".topic").innerHTML = "Play with String";
}
//function for the change in div3 content2
function changeContent2() {
  document.querySelector(".content2").style.display = "block";
  document.querySelector(".content1").style.display = "none";
  document.querySelector(".content3").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.querySelector(".div3").style.background = "white";
  document.querySelector(".topic").innerHTML = "Weather report";
}
//function for the change in div3 content3
function changeContent3() {
  document.querySelector(".content3").style.display = "block";
  document.querySelector(".content1").style.display = "none";
  document.querySelector(".content2").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.querySelector(".div3").style.background = "white";
  document.querySelector(".topic").innerHTML = "Temperature Converter";
}
//function for the long shadow for welcome screen
function shadow() {
  var text = document.getElementById("text");
  var shadow = "";
  for (var i = 0; i < 500; i++) {
    shadow += (shadow ? "," : "") + i * 1 + "px " + i * 1 + "px 0 #6062d3";
  }
  text.style.textShadow = shadow;
}

//content1 string play
const textarea = document.querySelector("textarea");
const count = document.querySelector(".count");
const wordsCount = document.querySelector(".Wcount");
const pallin = document.querySelector(".pallin");
const binary = document.querySelector(".binary");
//function to count letters, world, check binary string, count bits
function countLetters() {
  const textLength = textarea.value.length;
  let wc = 1;
  let pall = true;
  let bin = true;
  let countZero = 0;
  let countOne = 0;

  if (textLength === 0) {
    bin = false;
  } else if (
    textarea.value.charAt(0) !== "0" &&
    textarea.value.charAt(0) !== "1" &&
    textarea.value.charAt(0) !== " "
  ) {
    bin = false;
  } else if (textarea.value.charAt(0) === "0") {
    countZero++;
  } else if (textarea.value.charAt(0) === "1") {
    countOne++;
  }

  for (let i = 1; i < textLength; i++) {
    let string1 = textarea.value.charAt(i - 1);
    let string2 = textarea.value.charAt(i);
    let string3 = textarea.value.charAt(textLength - i);

    if (string1 == " " && string2 != " ") {
      wc++;
    }
    if (string1 !== string3) {
      pall = false;
    }

    if (string2 !== "1" && string2 !== "0" && string2 !== " ") {
      bin = false;
    }
    if (string2 === "1") {
      countOne++;
    }
    if (string2 === "0") {
      countZero++;
    }
  }
  if (textLength === 0) {
    wc = 0;
  }
  if (pall === false) {
    document.querySelector(".pallin").style.color = "#f00";
  } else {
    document.querySelector(".pallin").style.color = "rgb(29, 150, 45)";
  }

  if (bin === false) {
    document.querySelector(".binary").style.color = "#f00";
  } else {
    document.querySelector(".binary").style.color = "rgb(29, 150, 45)";
  }

  wordsCount.innerHTML = `${wc}`;
  pallin.innerHTML = `${pall}`;
  count.innerHTML = `${textLength}`;
  if (bin === false) {
    binary.innerHTML = `${bin}`;
  } else {
    binary.innerHTML =
      `${bin}` +
      " (Count of 0's: " +
      `${countZero}` +
      ", 1's: " +
      `${countOne}` +
      ")";
  }
}
//content2 requires weather api call

//content3 logic for temperature conversion
let kelvin = document.getElementById("kelvin");
let celsius = document.getElementById("celsius");
let fahren = document.getElementById("fahren");

function KelToCelAndFar() {
  let coutput = parseFloat(kelvin.value) - 273.15;
  celsius.value = parseFloat(coutput.toFixed(2));

  let foutput = parseFloat((celsius.value * 9) / 5) + 32;
  fahren.value = parseFloat(foutput.toFixed(2));

  console.log(coutput);
  console.log(foutput);
}

function FarToCelAndKel() {
  let coutput = (parseFloat(fahren.value - 32) * 5) / 9;
  celsius.value = parseFloat(coutput.toFixed(2));

  let koutput = parseFloat(coutput + 273.15);
  kelvin.value = parseFloat(koutput.toFixed(2));

  console.log(coutput);
  console.log(koutput);
}

function CelToKelAndFar() {
  let foutput = parseFloat((celsius.value * 9) / 5) + 32;
  fahren.value = parseFloat(foutput.toFixed(2));

  let koutput = (parseFloat(foutput - 32) * 5) / 9 + 273.15;
  kelvin.value = parseFloat(koutput.toFixed(2));

  console.log(foutput);
  console.log(koutput);
}

//time and date code logic
function timeDate() {
  var today = new Date();
  var currentDay = today.getDay();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var timeUnit = "AM";

  var date =
    today.getFullYear() +
    "-" +
    month[today.getMonth()] +
    "-" +
    today.getDate() +
    " ";
  var hour = (today.getHours() - 12);
  var minute = today.getMinutes();
  var second = today.getSeconds();

  var time = 
    (hour<10?"0"+hour:hour) + ":" + (minute<10?"0"+minute:minute)+ ":" + (second<10?"0"+second:second);
  // console.log(date, time);

  if (today.getHours() >= 12) {
    timeUnit = "PM";
  } else {
    timeUnit = "AM";
  }

  document.querySelector(".time").innerHTML = "" + time + " " + timeUnit;
  document.querySelector(".date").innerHTML = "" + date + "";
}
timeDate();
var t = setInterval(timeDate, 1000);
