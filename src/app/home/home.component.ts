import { Component, OnInit } from '@angular/core';
import { ArtService } from '../services/art.service';
import {Art} from '../shared/art'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arts !: Art[];

  constructor(public artService: ArtService){    
  }  
  ngOnInit(): void {
    this.arts = this.artService.getAll();
    
  }

}
