import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicsRowComponent } from './musics-row.component';

describe('MusicsRowComponent', () => {
  let component: MusicsRowComponent;
  let fixture: ComponentFixture<MusicsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicsRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
