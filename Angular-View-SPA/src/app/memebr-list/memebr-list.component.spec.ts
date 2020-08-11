import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemebrListComponent } from './memebr-list.component';

describe('MemebrListComponent', () => {
  let component: MemebrListComponent;
  let fixture: ComponentFixture<MemebrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemebrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemebrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
