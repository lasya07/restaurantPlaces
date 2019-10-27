import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit{
  posts: any = [];
  result: string;
  constructor(private apiService: ApiService){}
  searchName:string;
 ngOnInit() {

 }
  onSearch() {
    this.apiService.getPlaces(this.searchName).subscribe(posts => {
      console.log(posts);
      this.posts = posts.results;
    });
  }

  //   onSelect(PlaceId: string) {
  //   this.result = PlaceId;
  //   this.apiService.setPlaceId(this.result);
    
  //   // this.router.navigate(['profile', item.id]);
  // }

}
