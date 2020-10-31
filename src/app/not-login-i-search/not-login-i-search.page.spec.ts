import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotLoginISearchPage } from './not-login-i-search.page';

describe('NotLoginISearchPage', () => {
  let component: NotLoginISearchPage;
  let fixture: ComponentFixture<NotLoginISearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotLoginISearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotLoginISearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
