import { Component,Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ResolveEnd }   from '@angular/router';

import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: '../templates/todo-list.component.html',
  styleUrls: ['../static/todo-list.component.scss']
})
export class TodoListComponent {
  todos: Todo[] = [];
//   newtodos: Todo[] = [];
  @Input() todo: Todo = new Todo();

  constructor(
    private todoService: TodoService,
	private router: Router,
  ){}
  ngOnInit(): void {
    this.todoService.getAllTodo()
      .subscribe((todos: Todo[]) => this.todos = todos);
  }
  save(): void {
    this.todoService
      .create(this.todo)
      .subscribe(data => {this.getNewTodo()});
    this.todo = new Todo();
  }
//   update(id: number, title: string): void {
//     let todo = {
//       id: id,
//       title: title
//     }
//     this.todoService.update(todo);
//   }
  getNewTodo(): void {
    this.todoService
      .getNewTodo()
      .subscribe(res => {this.pushData(res)});
  }
  pushData(data: Todo): void {
    this.todos.unshift(data);
  }
  delete(id: number): void {
    this.todoService
      .delete(id)
	  .subscribe();
  }
}
