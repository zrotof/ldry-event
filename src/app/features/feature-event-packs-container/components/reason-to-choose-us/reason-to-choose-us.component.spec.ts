import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonToChooseUsComponent } from './reason-to-choose-us.component';

describe('ReasonToChooseUsComponent', () => {
  let component: ReasonToChooseUsComponent;
  let fixture: ComponentFixture<ReasonToChooseUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReasonToChooseUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasonToChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
