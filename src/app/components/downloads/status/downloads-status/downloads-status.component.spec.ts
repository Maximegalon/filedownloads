import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsStatusComponent } from './downloads-status.component';

describe('DownloadsStatusComponent', () => {
  let component: DownloadsStatusComponent;
  let fixture: ComponentFixture<DownloadsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadsStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
