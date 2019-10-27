import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:string;
  posts: any = [];
  
  result: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    // this.apiService.setPlaceId(this.id);
    this.apiService.setPlaceId(this.id).subscribe(posts => {
      console.log(posts);
      this.result = posts.result;
    });
  }

}
