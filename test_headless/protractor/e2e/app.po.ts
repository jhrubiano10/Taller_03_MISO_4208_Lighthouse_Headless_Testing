import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateDashBoard() {
    element(by.linkText('Dashboard')).click();
  }


  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  //Para buscar un héroe...
  searchHeroInInput(search: string) {
    element(by.tagName('input')).sendKeys(search);
    return element(by.css('.search-result')).getText();
  }

  //Eliminar un Héroe...
  deleteHero() {
    element.all(by.css('.heroes li')).first().element(by.buttonText('x')).click();
  }

  //Ir a un héroe desde el Dashboard...
  gotoHeroDashBoard() {
    element.all(by.css('.grid div')).first().click();
    return element(by.tagName('input')).getAttribute("value");
  }
  
  //Ir a un héroe desde el listado de héroes..
  gotoHeroListHeroes() {
    element.all(by.css('.heroes li')).first().click();
    element(by.buttonText('View Details')).click();
    return element(by.tagName('input')).getAttribute("value");
  }

  //Ir a un héroe desde la búsqueda...
  gotoHeroFromSearch(search: string) {
    element(by.tagName('input')).sendKeys(search);
    element(by.css('.search-result')).click();
    return element(by.tagName('input')).getAttribute("value");
  }

  //Editar un héroe...
  editHero (newName : string) {
    element.all(by.css('.grid div')).first().click();
    //En la página de edición cambiar los datos...
    var nameHero = element(by.tagName('input'));
    nameHero.clear();
    nameHero.sendKeys(newName);
    element(by.buttonText('Save')).click();
  }

}
