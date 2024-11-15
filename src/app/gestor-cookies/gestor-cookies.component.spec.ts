import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorCookiesComponent } from './gestor-cookies.component';

describe('GestorCookiesComponent', () => {
  let component: GestorCookiesComponent;
  let fixture: ComponentFixture<GestorCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorCookiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
