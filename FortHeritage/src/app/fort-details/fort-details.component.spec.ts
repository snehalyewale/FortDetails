import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortDetailsComponent } from './fort-details.component';

describe('FortDetailsComponent', () => {
  let component: FortDetailsComponent;
  let fixture: ComponentFixture<FortDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
