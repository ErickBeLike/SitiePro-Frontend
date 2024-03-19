import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInstalacionesComponent } from './registro-instalaciones.component';

describe('RegistroInstalacionesComponent', () => {
  let component: RegistroInstalacionesComponent;
  let fixture: ComponentFixture<RegistroInstalacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroInstalacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroInstalacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
