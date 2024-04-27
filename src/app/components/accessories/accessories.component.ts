import { Component } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent {
accessoryList=[
{imageurl:"https://everse-assets.s3.amazonaws.com/drone-accessories-images/batteries.png",
  title:"Batteries"
},
{imageurl:"https://everse-assets.s3.amazonaws.com/drone-accessories-images/remote-controller.png",
  title:"Remote Controller"
},
{imageurl:"https://everse-assets.s3.amazonaws.com/drone-accessories-images/propeller.png",
  title:"Propellers"
},
{imageurl:"https://everse-assets.s3.amazonaws.com/drone-accessories-images/cases.png",
  title:"Cases"
},
{imageurl:"https://everse-assets.s3.amazonaws.com/drone-accessories-images/charging+hub.png",
  title:"Charging Stations/Hubs"
},
{imageurl:"https://everse-assets.s3.amazonaws.com/drone-accessories-images/propeller-guard.png",
  title:"Propeller Guards"
}
]
}
