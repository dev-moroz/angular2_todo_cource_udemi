import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "./user.interface";
import {NgStyle} from "@angular/common";
import {CardComponent} from "../../ui/card/card.component";

type User = {
  id: string,
  name: string,
  avatar: string
}
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  imports: [
    NgStyle,
    CardComponent
  ],
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // @Input({required: true}) user!: IUser
  @Input({required: true}) user!: IUser// need, if we want to use only those params in components
  @Output() select = new EventEmitter()
  @Input() selectedUser!: boolean

  // it's new realization of output function, need to import output
  // select = output<string>()

  // the same, but it use Signal strategy, need to import input
  // user: IUser = input.required<IUser>();

  // I can use computed function to compute anything
  // imgPath = computed(() => {return ...})


  onSelect(userId: string){
    // console.log('Selected user', userId)
    this.select.emit(userId)
    // this.select.emit(this.user.id) // the same
  }
}
