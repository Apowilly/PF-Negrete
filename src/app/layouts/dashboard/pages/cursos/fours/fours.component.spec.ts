import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoursComponent } from './fours.component';

describe('FoursComponent', () => {
  let component: FoursComponent;
  let fixture: ComponentFixture<FoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
