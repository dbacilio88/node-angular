import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacsystemComponent } from './bacsystem.component';

describe('BacsystemComponent', () => {
  let component: BacsystemComponent;
  let fixture: ComponentFixture<BacsystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BacsystemComponent]
    });
    fixture = TestBed.createComponent(BacsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
