import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkScannerComponent } from './link-scanner.component';

describe('LinkScannerComponent', () => {
  let component: LinkScannerComponent;
  let fixture: ComponentFixture<LinkScannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkScannerComponent]
    });
    fixture = TestBed.createComponent(LinkScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
