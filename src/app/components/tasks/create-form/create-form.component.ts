import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {TaskComponent} from "../task/task.component";

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [
    FormsModule,
    TaskComponent
  ],
  templateUrl: './create-from.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent {
@Output() newTask = new EventEmitter();
@Output() closeForm = new EventEmitter();
@Input() id!: string

  createTask(form: NgForm){
    this.newTask.emit(form.value)
    this.closeForm.emit()
    form.reset()
  }

  closeCreateForm(){
    this.closeForm.emit()
  }
}
