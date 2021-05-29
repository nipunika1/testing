import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindNumberComponent } from './find-number.component';

describe('FindNumberComponent', () => {
  let component: FindNumberComponent;
  let fixture: ComponentFixture<FindNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
