describe("Thermostat", function() {
  beforeEach(function() {
    thermo = new Thermostat();
  })

  it("Sets default temperature to 20 degrees for new instance", function() {
    expect(thermo.temperature).toEqual(20);
  });

  describe("upTemp", function() {
    it("increases the temperature by a certain number of degrees", function() {
      thermo.upTemp(5)
      expect(thermo.temperature).toEqual(25);
    });

    it("only raises the temp to 25 degrees when powersave mode is on", function() {
      thermo.modecheck();
      thermo.upTemp(15);
      expect(thermo.temperature).toEqual(25);
    })
  })

  describe("downTemp", function() {
    it("decreases the temperature by a certain number of degrees", function() {
      thermo.downTemp(8)
      expect(thermo.temperature).toEqual(12)
    });

    it("does not lower the temperature below the minimum, 10 degrees", function() {
      thermo.downTemp(15)
      expect(thermo.temperature).toEqual(10)
    })
  });

  describe("reset", function() {
    it("resets the thermostat temperature to 20 degrees", function() {
      thermo.upTemp(51);
      thermo.reset();
      expect(thermo.temperature).toEqual(20)
    })
  })

  describe("energyUsage", function() {
    it("returns low-usage energy usage based on temperature < 18 degrees", function() {
      thermo.downTemp(3)
      expect(thermo.energyUsage()).toEqual("Low-usage")
    });

    it("returns medium-usage energy usage based on temperature 18-24 degrees", function () {
      expect(thermo.energyUsage()).toEqual("Medium-usage")
    });

    it("returns high-usage energy usage based on temperature > 24 degrees", function () {
      thermo.upTemp(6);
      expect(thermo.energyUsage()).toEqual("High-usage")
    });

  });

  describe("switchCheck", function() { 
    it("sets temperature to 25 if temperature is above maxtemp once powersave is switched on", function() {
      thermo.upTemp(15);
      thermo.switchMode();
      thermo.switchCheck();
      expect(thermo.temperature).toEqual(25)
    })
  })

  describe("switchMode", function () {
    it("switches mode between Powersave and Normal", function () {
      expect(thermo.mode).toEqual("Powersave")
      thermo.switchMode();
      expect(thermo.mode).toEqual("Normal")
    })
  })
});
