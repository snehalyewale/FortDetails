import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortListComponent } from './fort-list.component';

describe('FortListComponent', () => {
  let component: FortListComponent;
  let fixture: ComponentFixture<FortListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
