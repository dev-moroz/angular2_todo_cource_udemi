import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import { CommonModule } from "@angular/common";
import {UserComponent} from "./components/user/user.component";
import {IUser} from "./components/user/user.interface";
import {UsersService} from "./services/users.service";
import {TasksComponent} from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  usersService: UsersService = inject(UsersService);
  usersList: IUser[] = []
  selectedUserId?: string

  constructor() {
    this.usersService.getUsers()
      .then((users: IUser[]) => {
        this.usersList = users
      })
  }

  get selectedUser(){
    return this.usersList.find((user: IUser) => user.id === this.selectedUserId)
  }

  selectUser(id: string): void{
    this.selectedUserId = id
  }

  // showCreateTask = false
  // addTask(userId: string){
  //   this.showCreateTask = true
  //   console.log('addTask', userId)
  // }
}
