module.exports = {
  'Ir a una página de un profesor': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .pause(2000)
      .click('select[id="sample_select"] option[value="universidad-de-los-andes,arte"]')
      .waitForElementNotPresent('.loader', 1000)
      .waitForElementVisible('.profesor', 4000)
      .click(".profesor:nth-child(1)")
      .pause(2000)
      .end();
  }
};