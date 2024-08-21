import {Component, computed, effect, EventEmitter, inject, Input, Output, OnChanges, SimpleChanges} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {TasksService} from "../../services/tasks.service";
import {type ITask} from "./task/task.interface";
import {CreateFormComponent} from "./create-form/create-form.component"; // not necessary use "type in { ...}"

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    CreateFormComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnChanges {
  constructor() { // the same as 'tasksService': private tasksService: TasksService
      this.getTasks()
  }

  tasksService: TasksService = inject(TasksService);
  tasks?: ITask[]

  getTasks(){
    this.tasksService.getTasks()
      .then((res: ITask[]) => this.tasks = res)
  }

  // @Input({required: true}) name!: string // ! - уверяем, что значение будет /актуально для жесткой привязки при получении данных
  @Input() name!: string // ? - необязательное значение
  @Input() id!: string
  // name = input.required<string>();
  // @Output() addTask = new EventEmitter();

  get selectedTasks() {
    return this.tasks?.filter((task: ITask) => task.userId === this.id)
  }

  async deleteTask(taskId: string){
    await this.tasksService.deleteTask(taskId)
    this.getTasks()
  }

  showCreateTask = false

  changeVisibleCreateForm(){
    this.showCreateTask = !this.showCreateTask
  }

  async newTask(taskData: { title: string, summary: string}){
    await this.tasksService.addTask(taskData, this.id)
    this.getTasks()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && this.showCreateTask) this.showCreateTask = false
    // {
      // const prevId = changes['id'].previousValue;
      // const currentId = changes['id'].currentValue;
      //
      // console.log(`ID changed from ${prevId} to ${currentId}`);
    // }
  }
}
