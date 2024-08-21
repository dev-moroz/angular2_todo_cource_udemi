import { Injectable } from '@angular/core';
import { IUser } from '../components/user/user.interface'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  urlUser: string = 'http://localhost:3000/users';

  async getUsers(): Promise<IUser[]> {
    const users = await fetch(this.urlUser);
    const usersJson = await users.json() ?? []
    return this.setImgUrl(usersJson);
  }

  async getUserById(id: string): Promise<IUser> {
    console.log('id', id)
    const user = await fetch(this.urlUser + '/' + id);
    const userJson = await user.json() ?? []
    return userJson
  }

  setImgUrl(users: IUser[]){
    const urlAvatar = '/assets/users/'

    // if(Array.isArray(users)) {
      return users.map((user: IUser) => {
        user.avatar = urlAvatar + user.avatar
        return user
      })
    // }else{
    //   users.avatar = urlAvatar + users.avatar
    //   return users
    // }
  }
}
