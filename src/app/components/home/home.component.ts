import { Component} from '@angular/core';
import { ToolbarService } from 'src/app/shared/services/toolbar/toolbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
   
constructor(private toolbarService:ToolbarService){
  this.toolbarService.setShowMainToolbar(true);
}

}
