import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar-generator',
  templateUrl: './avatar-generator.component.html',
  styleUrls: ['./avatar-generator.component.scss']
})
export class AvatarGeneratorComponent {
  finalPath : string = "";
  handleChange(event:any){
   if(event.target.value) this.finalPath= "https://api.multiavatar.com/"+event.target.value+".png";
   else this.finalPath= "";
  }

}
