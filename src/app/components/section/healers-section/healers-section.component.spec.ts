import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealersSectionComponent } from './healers-section.component';

describe('HealersSectionComponent', () => {
  let component: HealersSectionComponent;
  let fixture: ComponentFixture<HealersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealersSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
