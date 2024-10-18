

$(function () {

    //create click function 
    $("#search").click(function () {
        //This stores the user submitted location
        var location = $("#location").val();
        var URL;
        // is not a number function 
        var cityName = isNaN(location);
        //change location name
        $("#location-header").text("Weather In " + location);
        //if user puts in a string url is q 
        // if they put in a zip url is zip
        if (cityName) {

            URL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey + "&units=imperial";
        } else {
            URL = "https://api.openweathermap.org/data/2.5/weather?zip=" + location + "&appid=" + apiKey + "&units=imperial";
        }


        // Clear last search
        $("#weather-info").empty();
        $("#error-message").empty();
        //api call
        $.ajax({
            url: URL,
            method: "GET",
            success: function (data) {

                var temperature = data.main.temp;
                var tempEmoji = getTempEmoji(temperature);
                var wind = data.wind.speed;
                var windEmoji = getWindEmoji(wind);
                var weather = data.weather[0].main;
                var weatherEmoji = getWeatherEmoji(weather);

                if (data) {
                    $("#weather-info").append(
                        "Temperature: " + data.main.temp + "°F " + tempEmoji + "<br>" +
                        "Weather: " + data.weather[0].main + weatherEmoji + "<br>" +
                        "Conditions: " + data.weather[0].description + "<br>" +
                        "Humidity: " + data.main.humidity + "%<br>" +
                        "Windspeed: " + data.wind.speed + " m/s " + windEmoji + "<br>"
                    );
                } else {
                    $("#weather-info").append("location not found");
                }


            },
            //error handling
            error: function (xhr, status, error) {
                $("#error-message").append("Error retrieving weather data: " + status + " - " + error);

            }

        })



    });
});

function getTempEmoji(temp) {
    if (temp < 32) {
        return "🥶";
    } else if (temp > 80) {
        return "🥵";
    }else{
        return ""; //empty string for everything else 
    }
}

function getWindEmoji(speed) {
    if (speed > 10) {
        return "🌬️";  
    } else {
        return "";  // empty string for no wind
    }
}


function getWeatherEmoji(main){
    if(main.toLowerCase() === "snow"){
        return "❄️";
    }else if(main.toLowerCase() === "clouds"){
        return "☁️";
    }else if(main.toLowerCase() === "rain"){
        return "🌧️";
    }else{
        return "";
    }
}