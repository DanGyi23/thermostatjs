$(document).ready(function () {
  var thermostat = new Thermostat;

// UsageText displays different colour for energy consumption based on conditional
  UsageText = function(text) {
    $('#energyconsumption').text("Energy usage: " + thermostat.energyUsage())
    if (text == "Energy usage: High-usage") {
      return $('#energyconsumption').css("color", "red")
    }
    else if (text == "Energy usage: Medium-usage") {
      return $('#energyconsumption').css("color", "black")
    }
    else {
      return $('#energyconsumption').css("color", "green")
    }
  };



  $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
  $('#powersavingmode').text("Energy Mode: " + thermostat.mode)
  $('#powersavingmode').css("color", "green")
  UsageText("Energy usage: " + thermostat.energyUsage())

  $('#temperature-down').click(function () {
    thermostat.downTemp(1);
    $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
    UsageText("Energy usage: " + thermostat.energyUsage())
  });

  $('#temperature-up').click(function () {
    thermostat.upTemp(1);
    $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
    UsageText("Energy usage: " + thermostat.energyUsage())
  });

  $('#temperature-reset').click(function () {
    thermostat.reset();
    $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
    UsageText("Energy usage: " + thermostat.energyUsage())
  });

  $('#powersaving-on').click(function () {
    thermostat.mode = "Powersave";
    thermostat.modecheck();
    thermostat.switchCheck();
    $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
    $('#powersavingmode').text("Energy Mode: " + thermostat.mode)
    $('#powersavingmode').css("color", "green")
    UsageText("Energy usage: " + thermostat.energyUsage())
  })

  $('#powersaving-off').click(function () {
    thermostat.mode = "Normal";
    thermostat.downTemp
    $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
    $('#powersavingmode').text("Energy Mode: " + thermostat.mode)
    $('#powersavingmode').css("color", "red")
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=70433ce8b9658ef0413db1586e9b120d&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
      $('#selected-city').text(data.name);
      $('#weather-description').text(data.weather[0]['main'])
    })
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=70433ce8b9658ef0413db1586e9b120d&units=metric', function(data) {
    $('#selected-city').text(data.name);
    $('#current-temperature').text(data.main.temp);
    $('#weather-description').text(data.weather[0]['main'])
  });

});