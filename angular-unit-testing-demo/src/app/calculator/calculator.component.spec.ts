import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add two numbers', () => {

    console.log('test add function');

    const result = component.add(5, 5);

    expect(result).toBe(10);
  });

  it('should subtract two numbers', () => {

    console.log('test subtract function');

    const result = component.subtract(5, 5);

    expect(result).toBe(0);
  });

  it('should multiply two numbers', () => {

    console.log('test multiply function');

    const result = component.multiply(5, 5);

    expect(result).toBe(25);
  });

  it('should divide two numbers', () => {

    console.log('test divide function');

    const result = component.divide(5, 5);

    expect(result).toBe(1);
  });

  it('should modulus two numbers', () => {

    console.log('test modulus function');

    const result = component.modulus(5, 5);

    expect(result).toBe(0);
  });

});
