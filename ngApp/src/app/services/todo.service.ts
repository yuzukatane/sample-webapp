import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Todo } from '../models/todo.model';


@Injectable()
export class TodoService {
	todo: Todo[] = [];
	private Url = 'http://127.0.0.1:8000/api/todo/'

	constructor(
		private http: HttpClient
	){}

	getAllTodo(): Observable<Todo[]>{
		return this.http
			.get<Todo[]>(this.Url)
			.pipe(catchError(this.handleError));
	}
	add(todo: Todo): Observable<Todo[]> {
		return this.http
			.post<Todo>(this.Url, todo, httpOptions)
			.pipe(catchError(this.handleError));
	}
	delete(id: number): Observable<unknown> {
		const url = `${this.Url}${id}/`;
		return this.http
			.delete(url, httpOptions)
			.pipe(catchError(this.handleError));
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
const httpOptions = {
	headers: new HttpHeaders({
	  'Content-Type':  'application/json',
	})
};