import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/task.model';

@Injectable()
export class TaskService {

  private tasks: Observable<[Task]>;
  constructor(private _htc:HttpClient) { }

  addTask(task: Task) {
    this._htc.post("http://localhost:3001/todos", task);
  }

  getTask(id: string):Observable<Task> {
    return this._htc.get<Task>("http://localhost:3001/todos/"+id);
  }

  getTasks():Observable<[Task]> {
    return this._htc.get<[Task]>("http://localhost:3001/todos");
  }

  removeTask(id) {
    this._htc.delete("http://localhost:3000/todos/"+id);
  }
}
