import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- Image and text -->
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="http://localhost:3000">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1Qx7FfAb72C6r7CJ4xUFDOBBeYqbZC59zPd76xktxeGl3ZS1&s" width="50" height="50" class="d-inline-block align-top" alt="">
      Restaurant Finder!!!
    </a>
  </nav>


  <div class="row mb-5">
    <div class="col-lg-8 mx-auto">
      
      <div class="bg-white p-5 rounded shadow">



        <app-places></app-places>

        </div>
        </div>
        </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'restaurantPlaces';
  searchName ="";
  onSearch():void{
    console.log(this.searchName);
  }
}
