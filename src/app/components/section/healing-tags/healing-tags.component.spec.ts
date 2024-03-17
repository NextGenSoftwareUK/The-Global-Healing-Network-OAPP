import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealingTagsComponent } from './healing-tags.component';

describe('HealingTagsComponent', () => {
  let component: HealingTagsComponent;
  let fixture: ComponentFixture<HealingTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealingTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealingTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
