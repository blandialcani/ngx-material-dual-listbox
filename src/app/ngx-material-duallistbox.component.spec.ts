import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialDuallistboxComponent } from './ngx-material-duallistbox.component';

describe('NgxMaterialDuallistboxComponent', () => {
  let component: NgxMaterialDuallistboxComponent;
  let fixture: ComponentFixture<NgxMaterialDuallistboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialDuallistboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialDuallistboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
