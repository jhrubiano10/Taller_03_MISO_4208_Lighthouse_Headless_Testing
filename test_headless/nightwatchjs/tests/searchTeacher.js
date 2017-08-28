module.exports = {
  'Buscar profesor': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.buscador', 4000)
      .click('.Select')
      .setValue('.buscador input[role="combobox"]', 'Jorge')
      .waitForElementVisible('.Select-menu-outer', 2000)
      .pause(2000)
      .sendKeys('.buscador input[role="combobox"]', browser.Keys.ENTER)
      .pause(2000)
      .end();
  }
};
//.click(".Select-menu > div:nth-child(1)")