import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveBeamComponent } from './love-beam.component';

describe('LoveBeamComponent', () => {
  let component: LoveBeamComponent;
  let fixture: ComponentFixture<LoveBeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoveBeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoveBeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
