import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicVerticalItemComponent } from './music-vertical-item.component';

describe('MusicVerticalItemComponent', () => {
  let component: MusicVerticalItemComponent;
  let fixture: ComponentFixture<MusicVerticalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicVerticalItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicVerticalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
