import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealingForumComponent } from './healing-forum.component';

describe('HealingForumComponent', () => {
  let component: HealingForumComponent;
  let fixture: ComponentFixture<HealingForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealingForumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealingForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
