import { Component,Input } from '@angular/core';
import { Router}   from '@angular/router';

import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';

@Component({
	selector: 'todo-list',
	templateUrl: '../templates/todo-list.component.html',
	styleUrls: ['../static/todo-list.component.scss']
})
export class TodoListComponent {
	todos: Todo[] = [];
	@Input() todo: Todo = new Todo();

	constructor(
		private todoService: TodoService,
	){}
	
	ngOnInit(): void {
		this.todoService.getAllTodo()
			.subscribe((todos: Todo[]) => this.todos = todos);
	}

	add(): void {
		this.todoService
			.add(this.todo)
			.subscribe(todo => this.todos.push(this.todo));
		window.location.reload();
	}

	delete(id: number): void {
		this.todoService
			.delete(id)
			.subscribe();
			window.location.reload();
	}
}
