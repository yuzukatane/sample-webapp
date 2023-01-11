import { Component,Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: '../templates/todo-list.component.html',
  styleUrls: ['../static/todo-list.component.scss']
})
export class TodoListComponent {
  todos: Todo[] = [];

  constructor(
    private todoService: TodoService,
	private router: Router,
  ){}
  ngOnInit(): void {
    this.todoService.getAllTodo()
      .subscribe((todos: Todo[]) => this.todos = todos);
  }

}
