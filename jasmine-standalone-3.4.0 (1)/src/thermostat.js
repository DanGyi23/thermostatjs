const MINTEMP = 10;

function Thermostat(temperature = 20) {
  this.temperature = temperature;
  this.mode = "Powersave";
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
  if (this.mode == "Powersave") {
    this.maxtemp = 25;
  }
  else {
    this.maxtemp = 32;
  };
};

Thermostat.prototype.switchMode = function() {
  if (this.mode == "Powersave") {
    this.mode = "Normal"
  }
  else {
    this.move = "Powersave"
  };
};

Thermostat.prototype.switchCheck = function() {
  if (this.temperature > this.maxtemp) {
    this.temperature = this.maxtemp
  }; 
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return "Low-usage"
  }
  else if (this.temperature > 17 && this.temperature < 25) {
    return "Medium-usage"
  }
  else {
    return "High-usage"
  };
};
