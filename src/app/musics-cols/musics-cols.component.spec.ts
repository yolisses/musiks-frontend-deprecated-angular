import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicsColsComponent } from './musics-cols.component';

describe('MusicsColsComponent', () => {
  let component: MusicsColsComponent;
  let fixture: ComponentFixture<MusicsColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicsColsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicsColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
