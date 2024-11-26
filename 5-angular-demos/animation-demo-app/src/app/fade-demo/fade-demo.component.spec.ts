import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeDemoComponent } from './fade-demo.component';

describe('FadeDemoComponent', () => {
  let component: FadeDemoComponent;
  let fixture: ComponentFixture<FadeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FadeDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FadeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
