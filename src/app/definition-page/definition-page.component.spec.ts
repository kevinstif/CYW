import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionPageComponent } from './definition-page.component';

describe('DefinitionPageComponent', () => {
  let component: DefinitionPageComponent;
  let fixture: ComponentFixture<DefinitionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefinitionPageComponent]
    });
    fixture = TestBed.createComponent(DefinitionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
