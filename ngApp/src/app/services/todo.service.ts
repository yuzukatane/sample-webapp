import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';

import { Todo } from '../models/todo.model';


@Injectable()
export class TodoService {
  todo: Todo[] = [];
  private Url = `http://127.0.0.1:8000/api/todo/`
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient
  ){}

  // 全てのtodoをGETする
  getAllTodo(): Promise<Todo[]> {
    return this.http
      .get(this.Url)
      .toPromise()
      .then(response => response as Todo[])
      .catch(this.handleError)
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
 }
}
