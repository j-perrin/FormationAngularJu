import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitresCComponent } from './titres-c.component';

describe('TitresCComponent', () => {
  let component: TitresCComponent;
  let fixture: ComponentFixture<TitresCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitresCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitresCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
