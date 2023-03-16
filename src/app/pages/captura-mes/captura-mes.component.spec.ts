import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaMesComponent } from './captura-mes.component';

describe('CapturaMesComponent', () => {
  let component: CapturaMesComponent;
  let fixture: ComponentFixture<CapturaMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapturaMesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapturaMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
