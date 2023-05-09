import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnSeulSuperHerosComponent } from './un-seul-super-heros.component';

describe('UnSeulSuperHerosComponent', () => {
  let component: UnSeulSuperHerosComponent;
  let fixture: ComponentFixture<UnSeulSuperHerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnSeulSuperHerosComponent]
    });
    fixture = TestBed.createComponent(UnSeulSuperHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
