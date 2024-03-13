import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, MatButtonModule, DatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  constructor(private _router: Router) { }
  isLogin: boolean = false;
  currentDate = new Date();
  loginForm = new FormGroup(
    {
      email: new FormControl("", [Validators.required, Validators.minLength(5), Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(5)]),
    },
  )

  numaralar:number[]=[];
  tamamlananlar: number[]=[]
    sonSecilen:number=0;
  ngOnInit(){
    for (let i = 1; i < 30; i++) {
      this.numaralar.push(i);
      
    }
  }

  selectKurban(){
    this.getRandomInt(this.numaralar.length);
  }

   getRandomInt(max:number) {
    const selectedNumber = Math.floor(Math.random() * max);
    this.tamamlananlar.push(selectedNumber);
    const index = this.numaralar.findIndex(a=>a == selectedNumber);
    console.log(index);
    
    this.numaralar.splice(index,1);
    this.sonSecilen = selectedNumber
    return selectedNumber;
  }

}
