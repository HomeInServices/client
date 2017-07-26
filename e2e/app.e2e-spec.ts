import { HominPage } from './app.po';

describe('homin App', () => {
  let page: HominPage;

  beforeEach(() => {
    page = new HominPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
