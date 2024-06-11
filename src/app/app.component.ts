import { Component } from '@angular/core';
import { IMode } from './models/user.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TDFormTest';

  contcatArr: Array<IMode> = [
    {
      moc : 'Email', id:1 
    },
    {
      moc : 'Mobile', id:12
    },
  ]

  onSignUp(data:NgForm){
    if(data.valid){
      console.log(data)
      console.log(data.value)
      data.reset()
    }
  }
}
