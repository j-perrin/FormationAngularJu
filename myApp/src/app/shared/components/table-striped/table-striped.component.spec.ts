import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStripedComponent } from './table-striped.component';

describe('TableStripedComponent', () => {
  let component: TableStripedComponent;
  let fixture: ComponentFixture<TableStripedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableStripedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStripedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
