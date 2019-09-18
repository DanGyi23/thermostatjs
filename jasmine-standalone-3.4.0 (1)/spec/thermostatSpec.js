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


});
