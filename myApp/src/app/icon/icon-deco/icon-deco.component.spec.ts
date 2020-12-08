import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDecoComponent } from './icon-deco.component';

describe('IconDecoComponent', () => {
  let component: IconDecoComponent;
  let fixture: ComponentFixture<IconDecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
