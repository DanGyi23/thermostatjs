$(document).ready(function () {
  var thermostat = new Thermostat;
  $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
  $('#powersavingmode').text("Energy Mode: " + thermostat.mode)
  $('#energyconsumption').text("Energy usage: " + thermostat.energyUsage())

  $('#temperature-down').click(function () {
    thermostat.downTemp(1);
    $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
    $('#energyconsumption').text("Energy usage: " + thermostat.energyUsage())
  });

  $('#temperature-up').click(function () {
    thermostat.upTemp(1);
    $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
    $('#energyconsumption').text("Energy usage: " + thermostat.energyUsage())
  });

  $('#temperature-reset').click(function () {
    thermostat.reset();
    $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
    $('#energyconsumption').text("Energy usage: " + thermostat.energyUsage())
  });

  $('#powersaving-on').click(function () {
    thermostat.mode = "Powersave";
    thermostat.modecheck();
    thermostat.switchCheck();
    $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
    $('#powersavingmode').text("Energy Mode: " + thermostat.mode)
    $('#energyconsumption').text("Energy usage: " + thermostat.energyUsage())
  })

  $('#powersaving-off').click(function () {
    thermostat.mode = "Normal";
    thermostat.downTemp
    $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
    $('#powersavingmode').text("Energy Mode: " + thermostat.mode)
  })

});