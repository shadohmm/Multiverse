import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards = [
    {
      title: 'Employee',
      description: 'Empower your journey; every step you take contributes to our collective success',
      imageUrl: '../../assets/Employee.png',
      routli:'/employees'
    },
    {
      title: 'Calculator',
      description: 'Numbers dance at the fingertips, let the calculator orchestrate the melody of precision.',
      imageUrl: '../../assets/Calculator.jpg',
      routli:'/calculator'
    },
    {
      title: 'ToDO',
      description: 'Organize your tasks, unleash productivity – Your personalized journey with our TODO app.',
      imageUrl: '../../assets/TodoList.png',
      routli:'/todolit'
    },
  ];

}
