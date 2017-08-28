var assert = require('assert');
describe('Profile Teacher', function() {
    it('Should visit profile teacher and filter courses', function () {
        browser.setViewportSize({
            width: 1024,
            height: 768
        });
        browser.url('https://losestudiantes.co/universidad-de-los-andes/ingenieria-industrial/profesores/jorge-alberto-huertas-pati%C3%B1o');
        //browser.pause(3000);
        var materias = browser.element('.materias');
        materias.waitForExist(5000);
        browser.waitForExist('input[name="IIND2103"]', 5000);
        var checkbox = materias.element('input[name="IIND2103"]');
        checkbox.click();        
        browser.pause(2000);
        checkbox.click();
        //browser.pause(1000);
    });
});