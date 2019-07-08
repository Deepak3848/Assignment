import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipToresumeComponent } from './flip-toresume.component';

describe('FlipToresumeComponent', () => {
  let component: FlipToresumeComponent;
  let fixture: ComponentFixture<FlipToresumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipToresumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipToresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
