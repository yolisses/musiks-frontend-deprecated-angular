import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniMusicItemComponent } from './mini-music-item.component';

describe('MiniMusicItemComponent', () => {
  let component: MiniMusicItemComponent;
  let fixture: ComponentFixture<MiniMusicItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniMusicItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniMusicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
