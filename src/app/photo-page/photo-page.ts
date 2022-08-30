import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Photo } from './photo-page.component';

describe('PostPageComponent', () => {
  let component: Photo;
  let fixture: ComponentFixture<Photo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Photo],
    }).compileComponents();

    fixture = TestBed.createComponent(Photo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
