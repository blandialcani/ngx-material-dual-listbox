import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialDuallistboxComponent } from './ngx-material-duallistbox.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatListModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NgxMaterialDuallistboxComponent', () => {
  let component: NgxMaterialDuallistboxComponent;
  let fixture: ComponentFixture<NgxMaterialDuallistboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatInputModule
      ],
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
