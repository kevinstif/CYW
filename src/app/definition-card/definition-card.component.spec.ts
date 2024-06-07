import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionCardComponent } from './definition-card.component';

describe('DefinitionCardComponent', () => {
  let component: DefinitionCardComponent;
  let fixture: ComponentFixture<DefinitionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefinitionCardComponent]
    });
    fixture = TestBed.createComponent(DefinitionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
