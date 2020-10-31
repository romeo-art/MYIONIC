import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ISearchPage } from './i-search.page';

describe('ISearchPage', () => {
  let component: ISearchPage;
  let fixture: ComponentFixture<ISearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ISearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ISearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
