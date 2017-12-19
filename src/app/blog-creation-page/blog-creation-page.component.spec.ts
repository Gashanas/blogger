import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreationPageComponent } from './blog-creation-page.component';

describe('BlogCreationPageComponent', () => {
  let component: BlogCreationPageComponent;
  let fixture: ComponentFixture<BlogCreationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCreationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
