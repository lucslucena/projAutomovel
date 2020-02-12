import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projterca';
  margem : number = 0;
  div = {'margin-left': '0px'}
  onSave($event){
    console.log("OK", $event)
  }


  andaMargem(){
    this.div={'margin-left' : this.margem + "px"}
  }

  disabled: boolean = false;
}
