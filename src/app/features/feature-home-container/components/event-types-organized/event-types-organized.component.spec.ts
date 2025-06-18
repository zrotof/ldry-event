import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTypesOrganizedComponent } from './event-types-organized.component';

describe('EventTypesOrganizedComponent', () => {
  let component: EventTypesOrganizedComponent;
  let fixture: ComponentFixture<EventTypesOrganizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTypesOrganizedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTypesOrganizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
