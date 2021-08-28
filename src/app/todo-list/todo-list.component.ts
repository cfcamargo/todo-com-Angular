import { Component } from '@angular/core';
import { TodoItem } from './todoItem'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  tasks: TodoItem[] = [
    {description: 'Estudar Angular', done: true},
    {description: 'Estudar o ngFor do angular', done: false}
  ]


  addTask(description: string){
    this.tasks.push({ 
        description: description, 
        done: false
      })
  }

  deleteTask(i :number) {
    this.tasks.splice(i, 1);
  }



}
