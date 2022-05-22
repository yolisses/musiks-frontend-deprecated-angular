import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsSessionComponent } from './artists-session.component';

describe('ArtistsSessionComponent', () => {
  let component: ArtistsSessionComponent;
  let fixture: ComponentFixture<ArtistsSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
