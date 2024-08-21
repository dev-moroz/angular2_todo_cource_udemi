import {Component, EventEmitter, Input, Output} from '@angular/core';
import {type ITask} from "./task.interface";
import {CardComponent} from "../../../ui/card/card.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
@Input({required: true}) task!: ITask
@Output() deleteTask = new EventEmitter<string>()

  taskCompleted(): void {
    this.deleteTask.emit(this.task.id)
  }
}
