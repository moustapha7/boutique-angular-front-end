import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFourComponent } from './update-four.component';

describe('UpdateFourComponent', () => {
  let component: UpdateFourComponent;
  let fixture: ComponentFixture<UpdateFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
