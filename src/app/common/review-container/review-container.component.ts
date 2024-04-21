import { Component } from '@angular/core';

@Component({
  selector: 'app-review-container',
  templateUrl: './review-container.component.html',
  styleUrls: ['./review-container.component.css']
})
export class ReviewContainerComponent {
  review_list=[
    {imageUrl:"assets/img/video/g-logo.png",
      name:"Google",
      rating:4,
      reviewComment:"Amazing drone delivery service! Fast and efficient. Highly recommended!"
    },
    {imageUrl:"assets/img/video/j-logo.png",
    name:"Just Dial",
    rating:5,
    reviewComment:"Great drone repair service overall, they have complete clarity of customer requirements."
     },
      {imageUrl:"assets/img/video/f-logo.png",
      name:"Facebook",
      rating:4,
      reviewComment:"I purchased drone from this place and got authentic product. Super happy with the service. Thank you Everse team"
      },
    {imageUrl:"assets/img/video/i-logo.png",
    name:"IndiaMart",
    rating:4,
    reviewComment:"Best dji drone dealer in banglore as I visited multiple places but no one was enough technical to explain all the technicalities of different models."
    },

  ]
  isCommentExpanded: boolean = false;

  toggleCommentExpansion(): void {
      this.isCommentExpanded = !this.isCommentExpanded;
  }
}
