import { Injectable } from '@angular/core';
import {ITask} from "../components/tasks/task/task.interface"

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  urlTasks: string = 'http://localhost:3000/tasks';

  async getTasks(): Promise<ITask[]> {
    const tasks = await fetch(this.urlTasks);
    return await tasks.json() ?? []
  }

  async deleteTask(id: string): Promise<any> {
    console.log('deleteTask id', id);
    return await fetch(this.urlTasks + '/' + id, {
      method: 'DELETE',
    })
  }

  async mockID(){
    const tasks: ITask[] = await this.getTasks()
    const id: string = tasks.at(-1)?.id!

    return 't' + (+id.split('t')[1]+ 1)
  }

  async addTask(task: { title: string, summary: string}, userId: string): Promise<any> {
    console.log('adding task', task, userId)
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    const idMock = await this.mockID()

    const dataTask = {
      ...task,
      userId,
      id: idMock,
      dueDate: formattedDate,
    }
    return await fetch(this.urlTasks, {
      method: 'POST',
      body: JSON.stringify(dataTask)
    })
  }
}

// GET    /posts
// GET    /posts/:id
// POST   /posts
// PUT    /posts/:id
// PATCH  /posts/:id
// DELETE /posts/:id
