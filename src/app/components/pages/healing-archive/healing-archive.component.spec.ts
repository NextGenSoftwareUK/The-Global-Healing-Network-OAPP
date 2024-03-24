import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealingArchiveComponent } from './healing-archive.component';

describe('HealingArchiveComponent', () => {
  let component: HealingArchiveComponent;
  let fixture: ComponentFixture<HealingArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealingArchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealingArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
