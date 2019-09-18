const MINTEMP = 10;

function Thermostat(temperature = 20) {
  this.temperature = temperature;
  this.mode = "powersave";
  this.maxtemp = 25;
};

Thermostat.prototype.upTemp = function(tempRaise) {
  this.modecheck();
  this.temperature += tempRaise
  if (this.temperature > this.maxtemp) {
    this.temperature = this.maxtemp
  };
};

Thermostat.prototype.downTemp = function(tempLower) {
  this.temperature -= tempLower
  if (this.temperature < MINTEMP) {
    this.temperature = MINTEMP
  };
};

Thermostat.prototype.modecheck = function() {
  if (this.mode == "powersave") {
    this.maxtemp = 25;
  }
  else {
    this.maxtemp = 32;
  };
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};
