import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesGraphComponent } from './cases-graph.component';

describe('CasesGraphComponent', () => {
  let component: CasesGraphComponent;
  let fixture: ComponentFixture<CasesGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesGraphComponent]
    });
    fixture = TestBed.createComponent(CasesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
