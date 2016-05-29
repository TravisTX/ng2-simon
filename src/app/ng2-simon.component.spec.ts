import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2SimonAppComponent } from '../app/ng2-simon.component';

beforeEachProviders(() => [Ng2SimonAppComponent]);

describe('App: Ng2Simon', () => {
  it('should create the app',
      inject([Ng2SimonAppComponent], (app: Ng2SimonAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-simon works!\'',
      inject([Ng2SimonAppComponent], (app: Ng2SimonAppComponent) => {
    expect(app.title).toEqual('ng2-simon works!');
  }));
});
