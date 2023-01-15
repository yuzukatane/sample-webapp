import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';

import { Todo } from '../models/todo.model';


@Injectable()
export class TodoService {
	todo: Todo[] = [];
	private Url = 'http://127.0.0.1:8000/api/todo/'
	// private headers = new Headers({'Content-Type': 'application/json'});

	constructor(
		private http: HttpClient
	){}

//   全てのtodoをGETする

	// getAllTodo() {
	// 	return this.http
	// 		.get(this.Url)
	// 		.pipe(map(res => res as Todo[]))
	// 		.pipe(catchError(this.handleError));
	// }
	getAllTodo(): Observable<Todo[]>{
		return this.http
			.get<Todo[]>(this.Url)
			.pipe(catchError(this.handleError));
	}
	create(todo: Todo) {
		return this.http
			.post(this.Url, JSON.stringify(todo), httpOptions)
			.pipe(map(res => res))
			.pipe(catchError(this.handleError));
	}
	getNewTodo(){
		return this.http
			.get(this.Url+"?limit=1")
			.pipe(map(res => res))
			.pipe(catchError(this.handleError));
	}
	// update(todo: Todo): Observable<unknown> {
	// 	const url = `${this.Url}${todo.id}/`;
	// 	return this.http
	// 		.put<Todo>(url, todo, httpOptions)
	// 		.pipe(catchError(this.handleError));
	// }
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
	//   Authorization: 'my-auth-token'
	})
};