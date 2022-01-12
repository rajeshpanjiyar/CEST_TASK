const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");

const app = express(); //new instance of express

app.use(express.static(__dirname + "/public")); //for static files to load in server
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName; //user city choice
  const apiKey = "f64d30930ec8e039c48addfb204d34c1";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  https.get(url, function (response) {
    console.log(response.statusCode);

    if (response.statusCode == 200) {
      response.on("data", function (data) {
        const weatherData = JSON.parse(data); //converting JSON data into js object //weatherData is js object now
        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        res.write(
          "<h1>Temperature in " + query + " is: " + temp + " &#8451;</h1>" //&#8451; is degree celcius
        );
        res.write("<i>Weather currently is " + weatherDescription + "</i>");

        res.send();
      });
    } else {
      res.send("Please enter valid City name!");
    }
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});
