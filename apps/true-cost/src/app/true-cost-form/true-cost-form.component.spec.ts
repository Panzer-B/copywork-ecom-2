import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueCostFormComponent } from './true-cost-form.component';

describe('TrueCostFormComponent', () => {
  let component: TrueCostFormComponent;
  let fixture: ComponentFixture<TrueCostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrueCostFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrueCostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
