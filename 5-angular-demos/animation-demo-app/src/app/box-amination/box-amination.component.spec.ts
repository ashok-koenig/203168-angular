import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAminationComponent } from './box-amination.component';

describe('BoxAminationComponent', () => {
  let component: BoxAminationComponent;
  let fixture: ComponentFixture<BoxAminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxAminationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxAminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
