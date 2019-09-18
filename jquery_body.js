$(document).ready(function () {
  var thermostat = new Thermostat;
  $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
  $('#powersavingmode').text("Energy Mode: " + thermostat.mode)

  $('#temperature-down').click(function () {
    thermostat.downTemp(1);
    $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
  });

  $('#temperature-up').click(function () {
    thermostat.upTemp(1);
    $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
  });

  $('#temperature-reset').click(function () {
    thermostat.reset();
    $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
  });

  $('#powersaving-on').click(function () {
    thermostat.mode = "Powersave";
    thermostat.modecheck();
    thermostat.switchCheck();
    $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
    $('#powersavingmode').text("Energy Mode: " + thermostat.mode)
  })

  $('#powersaving-off').click(function () {
    thermostat.mode = "Normal";
    thermostat.downTemp
    $('#temperature').text("Temperature: " + thermostat.temperature + " Degrees");
    $('#powersavingmode').text("Energy Mode: " + thermostat.mode)
  })

});