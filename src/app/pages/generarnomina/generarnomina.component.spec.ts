import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarnominaComponent } from './generarnomina.component';

describe('GenerarnominaComponent', () => {
  let component: GenerarnominaComponent;
  let fixture: ComponentFixture<GenerarnominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarnominaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarnominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
