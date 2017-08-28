var assert = require('assert');
describe('los estudiantes login', function() {
    it('Should create a new user', function () {
        browser.setViewportSize({
            width: 1024,
            height: 768
        });
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');
        //browser.pause(3000);
        var cajaSignUp = browser.element('.cajaSignUp');
        cajaSignUp.element('input[name="nombre"]').click().keys('Jorge');
        cajaSignUp.element('input[name="apellido"]').click().keys('Rubiano');
        cajaSignUp.element('input[name="correo"]').click().keys('jh.rubiano10@uniandes.edu.co');
        cajaSignUp.element('select[name="idDepartamento"]').selectByValue('3');
        cajaSignUp.element('input[name="password"]').click().keys('J0rg3123456');
        cajaSignUp.element('input[name="acepta"]').click();
        cajaSignUp.element('button=Registrarse').click();        
        //browser.waitForVisible('button=Registrarse', 5000);
        //browser.pause(2000);
    });
});