import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooMediaComponent } from './foo-media.component';

describe('FooMediaComponent', () => {
  let component: FooMediaComponent;
  let fixture: ComponentFixture<FooMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
