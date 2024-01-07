import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  displayValue: string = '';

  buttons = [
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '/', value: '/' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '*', value: '*' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '-', value: '-' },
    { label: '0', value: '0' },
    { label: '.', value: '.' },
    { label: '=', value: '=' },
    { label: '+', value: '+' },
    { label: 'C', value: 'C' }
  ];

  onButtonClick(value: string): void {
    if (value === '=') {
      this.calculateResult();
    } else if (value === 'C') {
      this.clearDisplay();
    } else {
      this.displayValue += value;
    }
  }

  calculateResult(): void {
    try {
      this.displayValue = eval(this.displayValue);
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  clearDisplay(): void {
    this.displayValue = '';
  }

}
