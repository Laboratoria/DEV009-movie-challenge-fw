import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaCardComponent } from './media-card.component';

describe('MovieComponent', () => {
  let component: MediaCardComponent;
  let fixture: ComponentFixture<MediaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaCardComponent]
    });
    fixture = TestBed.createComponent(MediaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});