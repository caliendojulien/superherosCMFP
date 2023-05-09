import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonDeuxiemeComponent } from './mon-deuxieme.component';

describe('MonDeuxiemeComponent', () => {
  let component: MonDeuxiemeComponent;
  let fixture: ComponentFixture<MonDeuxiemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonDeuxiemeComponent]
    });
    fixture = TestBed.createComponent(MonDeuxiemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
