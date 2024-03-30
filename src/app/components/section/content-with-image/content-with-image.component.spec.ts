import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWithImageComponent } from './content-with-image.component';

describe('ContentWithImageComponent', () => {
  let component: ContentWithImageComponent;
  let fixture: ComponentFixture<ContentWithImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentWithImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
