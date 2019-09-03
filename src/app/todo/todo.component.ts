import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos = [
    {
    item: 'TakeGodday vet',
    },
    {
      item: 'Get oil change',
    },
    {
      item: 'Finish super hard puzzle',
    },
    {
      item: 'Pack for Denver',
    },
    {
      item: 'Create to-do app',
    }
  ];

  addTodo(input: HTMLInputElement){
    this.todos = [{ item: input.value }, ...this.todos];
    input.value = '';
  }

  removeTodo(i) {
    this.todos.splice(i);
  }
  constructor() { }

  ngOnInit() {
    {

    }
  }

}
