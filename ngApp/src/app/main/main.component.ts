
import { Component,Input } from '@angular/core';
import { Router}   from '@angular/router';

import { TodoService } from './main.service';
import { Todo } from './main.model';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
  })
export class MainComponent {
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
