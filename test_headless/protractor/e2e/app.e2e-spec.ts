import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Task', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });
  
  it('Search a hero', () => {
    page.navigateTo();
    expect(page.searchHeroInInput("Zero")).toEqual("Zero");
  });
  
  it('Goto to hero Dashboard', () => {
    page.navigateTo();
    expect(page.gotoHeroDashBoard()).toEqual("Mr. Nice");
  });  
  
  it('Goto Hero from Heroes list', () => {    
    page.navigateToHeroes();
    expect(page.gotoHeroListHeroes()).toEqual("Zero");
  });

  it('Goto Hero from Search', () => {    
    page.navigateTo();
    expect(page.gotoHeroFromSearch("Zero")).toEqual("Zero");
  });

  it('Edit a Hero', () => {    
    page.navigateTo();
    page.editHero("Zorro");
    page.navigateDashBoard();
    expect(page.gotoHeroDashBoard()).toEqual("Zorro");
  });

});



describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

});

describe('Tour of heroes, delete', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('Delete a hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.deleteHero();
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });

});



