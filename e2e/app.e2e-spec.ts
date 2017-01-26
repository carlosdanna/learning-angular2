import { LearningAngular2Page } from './app.po';

describe('learning-angular2 App', function() {
  let page: LearningAngular2Page;

  beforeEach(() => {
    page = new LearningAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
