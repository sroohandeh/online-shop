import { Component, OnInit } from '@angular/core';
import { ArtService } from '../services/art.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  artPics !: string[];

  constructor(public artService: ArtService){    
  }  
  ngOnInit(): void {
    this.artPics = this.artService.getAll();
    
  }

}
