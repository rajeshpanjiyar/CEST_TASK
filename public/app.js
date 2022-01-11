function changeDiv2(bgColor, color, borderColor) {
  document.getElementById("div2").style.background = "" + bgColor + "";
  document.getElementById("div2").style.backgroundSize = "cover";
  document.getElementById("up").style.background =
    "linear-gradient(" + color + ")";
  document.getElementById("h2").style.borderColor = "" + borderColor + "";
}

//function for the change in
function changeContent1() {
  document.querySelector(".content1").style.display = "block";
  document.querySelector(".content2").style.display = "none";
  document.querySelector(".content3").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.querySelector(".div3").style.background = "white";
  document.querySelector(".topic").innerHTML = "Play with String";
  
}
function changeContent2() {
  document.querySelector(".content2").style.display = "block";
  document.querySelector(".content1").style.display = "none";
  document.querySelector(".content3").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.querySelector(".div3").style.background = "white";
  document.querySelector(".topic").innerHTML = "Weather report";
}
function changeContent3() {
  document.querySelector(".content3").style.display = "block";
  document.querySelector(".content1").style.display = "none";
  document.querySelector(".content2").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.querySelector(".div3").style.background = "white";
  document.querySelector(".topic").innerHTML = "Temperature Converter";
}

function darkmode() {
  document.getElementById("div2").style.background = "#17141F";
  document.getElementById("div3").style.background = "#17141F";
  document.getElementById("div3").style.color = "white";
  document.p.style.color = "#5b585f";

  document.getElementById("div1").style.background = "#181719";
  document.getElementById("div1").style.color = "white";
  document.getElementById("left").style.background = "#17141F";
}

function lightmode() {
  document.getElementById("div2").style.background = "white";
  document.getElementById("div3").style.background = "white";
  document.getElementById("div3").style.color = "black";
  document.p.style.color = "black";

  document.getElementById("div1").style.background = "#E5E5E5";
  document.getElementById("div1").style.color = "black";
  document.getElementById("left").style.background = "white";
}

function shadow()
{
  var text = document.getElementById("text");
  var shadow = "";
  for (var i = 0; i < 500; i++) {
    shadow += (shadow ? "," : "") + i * 1 + "px " + i * 1 + "px 0 #01ded3";
  }
  text.style.textShadow = shadow;

}

//content1
const textarea = document.querySelector('textarea');
const count = document.querySelector('.count');
const wordsCount = document.querySelector('.Wcount');
const pallin = document.querySelector('.pallin');
const binary = document.querySelector('.binary');
function countLetters()
{   
    const textLength = textarea.value.length;
    let wc = 1;
    let pall = true;
    let bin = true;
    let countZero = 0;
    let countOne = 0;

    if(textLength === 0){
        bin = false;
    }else if(textarea.value.charAt(0) !== '0' && textarea.value.charAt(0) !== '1' && textarea.value.charAt(0) !== ' '){
        bin = false;
    }else if(textarea.value.charAt(0) === '0'){
        countZero++;
    }else if(textarea.value.charAt(0) === '1'){
        countOne++;
    }
    
    
    for(let i = 1;i < textLength; i++){
        let string1 =  textarea.value.charAt(i-1);
        let string2 =  textarea.value.charAt(i);
        let string3 =  textarea.value.charAt(textLength - i);

        if( string1 == ' ' && string2 != ' '){
          wc++;
        }
        if(string1 !== string3){
            pall = false;
        }

        if(string2 !== '1' && string2 !== '0' && string2 !== ' ' ){
        bin = false;
        }
        if(string2 === '1'){
            countOne++;
        }
        if(string2 === '0'){
            countZero++;
        }
    }
    if(textLength === 0){
        wc = 0;
    }
    if(pall === false){
        document.querySelector(".pallin").style.color = "#f00";
    }else{
        document.querySelector(".pallin").style.color = "rgb(29, 150, 45)";
    }

    if(bin === false){
        document.querySelector(".binary").style.color = "#f00";
    }else{
        document.querySelector(".binary").style.color = "rgb(29, 150, 45)";
    }

    wordsCount.innerHTML = `${wc}`;
    pallin.innerHTML = `${pall}`;
    count.innerHTML = `${textLength}`;
    if(bin === false){ 
    binary.innerHTML = `${bin}`;
    }else{
    binary.innerHTML = `${bin}` + " (Count of 0's: " + `${countZero}`+ ", 1's: " + `${countOne}` + ")";
    }
}

//tc

let kelvin = document.getElementById("kelvin");
let celsius = document.getElementById("celsius");
let fahren = document.getElementById("fahren");


function KelToCelAndFar()
{ 
    let coutput = (parseFloat(kelvin.value) - 273.15);
    celsius.value = parseFloat(coutput.toFixed(2));

    let foutput = (parseFloat(celsius.value * 9/5) + 32);
    fahren.value = parseFloat(foutput.toFixed(2));

    console.log(coutput); 
    console.log(foutput);

}

function FarToCelAndKel()
{

    let coutput = (parseFloat(fahren.value - 32) * 5/9);
    celsius.value = parseFloat(coutput.toFixed(2));

    let koutput = (parseFloat(coutput + 273.15));
    kelvin.value = parseFloat(koutput.toFixed(2));

    console.log(coutput); 
    console.log(koutput);

}

function CelToKelAndFar()
{
 
    let foutput = (parseFloat(celsius.value * 9/5) + 32);
    fahren.value = parseFloat(foutput.toFixed(2));

    let koutput = (parseFloat(foutput - 32) * 5/9 + 273.15);
    kelvin.value = parseFloat(koutput.toFixed(2));

    console.log(foutput); 
    console.log(koutput);

}