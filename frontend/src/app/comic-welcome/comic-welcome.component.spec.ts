import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicWelcomeComponent } from './comic-welcome.component';

describe('ComicWelcomeComponent', () => {
  let component: ComicWelcomeComponent;
  let fixture: ComponentFixture<ComicWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
